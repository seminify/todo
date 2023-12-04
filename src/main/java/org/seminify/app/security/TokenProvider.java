package org.seminify.app.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import org.seminify.app.model.UserEntity;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

@Slf4j
@Component
public class TokenProvider {
    private static final String key = "4470e037aca7280d334ce510e4fe938a9255356d0c5dae5859a51cb0df4511983df89e100515a6f5373641260211a99983d3089ba498bdc8cd7901e72efc4b87";

    public String create(UserEntity userEntity) {
        return Jwts.builder().signWith(Keys.hmacShaKeyFor(Decoders.BASE64.decode(key))).issuer("todo app").subject(userEntity.getId()).expiration(Date.from(Instant.now().plus(1, ChronoUnit.DAYS))).issuedAt(new Date()).compact();
    }

    public String validateAndGetUserId(String token) {
        return Jwts.parser().verifyWith(Keys.hmacShaKeyFor(Decoders.BASE64.decode(key))).build().parseSignedClaims(token).getPayload().getSubject();
    }
}
