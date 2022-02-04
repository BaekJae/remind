package com.team5.remind_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication
@PropertySource(value = { "classpath:${jdbc.config}"})
public class RemindServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(RemindServerApplication.class, args);
    }

}
