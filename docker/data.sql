-- -----------------------------------------------------
-- Schema full-stack-sportscenter
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `bookstore`;
USE `bookstore`;

DROP TABLE IF EXISTS Brand;
DROP TABLE IF EXISTS Type;
DROP TABLE IF EXISTS Product;

-- Publishers
CREATE TABLE `Brand` (
    `Id` INT AUTO_INCREMENT PRIMARY KEY,
    `Name` VARCHAR(255) NOT NULL
);

INSERT INTO Brand (Name) VALUES
('Shueisha'),
('Kodansha'),
('Shogakukan'),
('Square Enix'),
('Dark Horse'),
('Viz Media'),
('Yen Press');

-- Genres
CREATE TABLE `Type` (
    `Id` INT AUTO_INCREMENT PRIMARY KEY,
    `Name` VARCHAR(255) NOT NULL
);

INSERT INTO Type (Name) VALUES
('Shonen'),
('Seinen'),
('Shojo'),
('Fantasy'),
('Action'),
('Romance');

-- Manga Products
CREATE TABLE `Product` (
    `Id` INT AUTO_INCREMENT PRIMARY KEY,
    `Name` VARCHAR(255) NOT NULL,
    `Description` TEXT,
    `Price` DECIMAL(10, 2) NOT NULL,
    `PictureUrl` VARCHAR(255),
    `ProductTypeId` INT NOT NULL,
    `ProductBrandId` INT NOT NULL,
    FOREIGN KEY (`ProductTypeId`) REFERENCES `Type`(`Id`),
    FOREIGN KEY (`ProductBrandId`) REFERENCES `Brand`(`Id`)
);

INSERT INTO Product (Name, Description, Price, PictureUrl, ProductTypeId, ProductBrandId) VALUES
('Naruto Vol. 1', 'A young ninja strives to become Hokage.', 9.99, 'images/manga/naruto-1.png', 1, 1),
('Naruto Vol. 2', 'Naruto continues his ninja journey.', 9.99, 'images/manga/naruto-2.png', 1, 1),
('One Piece Vol. 1', 'A boy sets sail to become Pirate King.', 10.99, 'images/manga/onepiece-1.png', 1, 1),
('Attack on Titan Vol. 1', 'Humanity fights monstrous Titans.', 12.99, 'images/manga/aot-1.png', 5, 2),
('Attack on Titan Vol. 2', 'Secrets behind the Titans emerge.', 12.99, 'images/manga/aot-2.png', 5, 2),
('Tokyo Ghoul Vol. 1', 'A boy becomes half-ghoul in Tokyo.', 11.99, 'images/manga/tokyoghoul-1.png', 2, 2),
('Demon Slayer Vol. 1', 'A boy hunts demons to save his sister.', 9.99, 'images/manga/demonslayer-1.png', 1, 6),
('My Hero Academia Vol. 1', 'A powerless boy enrolls in hero school.', 9.99, 'images/manga/mha-1.png', 1, 6),
('Death Note Vol. 1', 'A notebook that kills anyone whose name is written.', 10.99, 'images/manga/deathnote-1.png', 2, 1),
('Bleach Vol. 1', 'A teen becomes a Soul Reaper.', 9.99, 'images/manga/bleach-1.png', 1, 1),
('Fullmetal Alchemist Vol. 1', 'Two brothers seek the Philosopher’s Stone.', 11.99, 'images/manga/fma-1.png', 4, 4),
('Berserk Vol. 1', 'A lone mercenary battles dark forces.', 14.99, 'images/manga/berserk-1.png', 2, 5),
('Your Name Vol. 1', 'Two teens swap bodies across time.', 10.99, 'images/manga/yourname-1.png', 6, 7),
('Sailor Moon Vol. 1', 'A schoolgirl becomes a guardian warrior.', 8.99, 'images/manga/sailormoon-1.png', 3, 2),
('Dragon Ball Vol. 1', 'A boy with a tail searches for Dragon Balls.', 9.99, 'images/manga/dragonball-1.png', 1, 3);