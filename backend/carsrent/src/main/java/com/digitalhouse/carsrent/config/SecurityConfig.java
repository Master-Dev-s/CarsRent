package com.digitalhouse.carsrent.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfig
        extends WebSecurityConfigurerAdapter
{

    @Override
    protected void configure(HttpSecurity http)
    throws
    Exception
    {
        http
                .authorizeRequests()
                .antMatchers(
                        "/v2/api-docs",
                        "/configuration/ui",
                        "/swagger-resources/**",
                        "/configuration/security",
                        "/swagger-ui.html",
                        "/webjars/**",
                        "/swagger-ui/**"
                            )
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .formLogin()
                .permitAll()
                .and()
                .logout()
                .permitAll();

        // Desabilitar o CSRF para simplificar o exemplo (não recomendado em produção)
        http
                .csrf()
                .disable();
    }
}
