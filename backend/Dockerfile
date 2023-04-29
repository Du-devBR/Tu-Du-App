# Usa a imagem oficial do OpenJDK como base
FROM openjdk:17-jdk-alpine

# Define o diretório de trabalho da aplicação dentro do container
WORKDIR /app

# Copia o arquivo .jar da aplicação para dentro do container
COPY tu-du/target/tu-du-0.0.1-SNAPSHOT.jar app.jar

# Expõe a porta 8080 para acesso externo
EXPOSE 8080

# Define o comando de inicialização da aplicação
CMD ["java", "-jar", "app.jar"]
