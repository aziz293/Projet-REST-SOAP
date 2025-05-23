# Projet-REST-SOAP
bibliotheque-hybride/
├── src/
│   └── main/
│       ├── java/com/example/bibliotheque/
│       │   ├── BibliothequeApplication.java         # Classe principale Spring Boot
│       │   ├── config/
│       │   │   └── WebServiceConfig.java           # Configuration du service SOAP
│       │   ├── controller/
│       │   │   ├── LivreController.java             # Contrôleur REST pour les livres
│       │   │   └── ReservationController.java       # Contrôleur REST pour les réservations
│       │   ├── soap/
│       │   │   ├── LivreSoapEndpoint.java           # Endpoint SOAP
│       │   │   └── service/
│       │   │       └── LivreSoapService.java        # Logique métier SOAP
│       │   ├── model/
│       │   │   ├── Livre.java                       # Entité JPA pour les livres
│       │   │   ├── Utilisateur.java                 # Entité JPA pour les utilisateurs
│       │   │   └── Reservation.java                # Entité JPA pour les réservations
│       │   ├── repository/
│       │   │   ├── LivreRepository.java             # Repository Spring Data pour les livres
│       │   │   └── ReservationRepository.java       # Repository Spring Data pour les réservations
│       │   ├── service/
│       │   │   ├── LivreService.java                 # Logique métier REST pour les livres
│       │   │   └── ReservationService.java           # Logique métier REST pour les réservations
│       │   └── security/
│       │       └── SecurityConfig.java              # Configuration de sécurité
│       └── resources/
│           ├── application.properties               # Configurations Spring Boot
│           ├── bibliotheque.xsd                     # Schéma XSD pour SOAP
│           └── static/                              # Fichiers statiques (optionnel)
│               └── swagger/                          # Documentation Swagger (optionnel)
│
├── test/
│   └── java/com/example/bibliotheque/
│       ├── controller/
│       │   ├── LivreControllerTest.java             # Tests pour LivreController
│       │   └── ReservationControllerTest.java       # Tests pour ReservationController
│       └── soap/
│           └── LivreSoapEndpointTest.java           # Tests pour LivreSoapEndpoint
│
└── pom.xml                                          # Dépendances Maven
