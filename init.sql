CREATE TABLE CARDS (ID SERIAL PRIMARY KEY, english TEXT NOT NULL, german TEXT NOT NULL, chinese TEXT NOT NULL, ImageURL TEXT, Category TEXT NOT NULL);


INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Apple','der Apfel','蘋果','https://images.unsplash.com/photo-1568702846914-96b305d2aaeb','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Orange','die Orange','橙','https://images.unsplash.com/photo-1575411619998-a654a55391da','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Grape','die Traube','提子','https://images.unsplash.com/photo-1515778767554-42d4b373f2b3','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Kiwi','die Kiwi','奇異果','https://images.unsplash.com/photo-1585059895524-72359e06133a','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Strawberry','die Erdbeere','士多啤梨','https://images.unsplash.com/photo-1564518087238-8d82baa9d7cc','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Blueberry','die Blaubeere','藍莓', 'https://images.unsplash.com/photo-1498557850523-fd3d118b962e','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Mango','die Mango','芒果', 'https://images.unsplash.com/photo-1553279768-865429fa0078','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Avocado','die Avocado','牛油果','https://images.unsplash.com/photo-1587825045005-c9cc5fa27203','Fruit');
INSERT INTO CARDS(english, german, chinese, ImageURL, Category) VALUES ('Banana','die Banane','香蕉','https://images.unsplash.com/photo-1566393028639-d108a42c46a7','Fruit');