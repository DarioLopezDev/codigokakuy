-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 31-03-2024 a las 00:35:40
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `codigokakuy`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authors`
--

CREATE TABLE `authors` (
  `author_id` int(11) NOT NULL,
  `fullname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `authors`
--

INSERT INTO `authors` (`author_id`, `fullname`) VALUES
(10, 'Anne Frank'),
(19, 'Benjamin Graham'),
(25, 'Clarissa Pinkola Estés'),
(1, 'Dan Brown'),
(24, 'Eckhart Tolle'),
(7, 'Emily Brontë'),
(8, 'Frances Mayes'),
(15, 'Frank Herbert'),
(9, 'Gail Honeyman'),
(23, 'George S. Clason'),
(22, 'Ha-Joon Chang'),
(17, 'Isaac Asimov'),
(6, 'Jane Austen'),
(11, 'John Steinbeck'),
(12, 'Khaled Hosseini'),
(26, 'Marie Kondo'),
(5, 'Michael Crichton'),
(27, 'Napoleón Hill'),
(18, 'Neal Stephenson'),
(13, 'Nicholas Sparks'),
(4, 'Orson Scott Card'),
(2, 'Patrick Rothfuss'),
(21, 'Raimon Samsó'),
(20, 'Robert T. Kiyosaki'),
(3, 'Stephen King'),
(16, 'William Gibson'),
(14, 'William Golding');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `books`
--

CREATE TABLE `books` (
  `book_id` int(11) NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `isbn` bigint(13) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `pages` int(11) NOT NULL,
  `year` int(4) NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author_id` int(11) NOT NULL,
  `publisher_id` int(11) NOT NULL,
  `genre_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `books`
--

INSERT INTO `books` (`book_id`, `title`, `isbn`, `price`, `pages`, `year`, `description`, `stock`, `image`, `author_id`, `publisher_id`, `genre_id`) VALUES
(1, 'Código Da Vinci', 9780307474278, 24.99, 592, 2003, 'Un thriller de acción y misterio.', 10, 'portada_el-codigo-da-vinci_dan-brown_201505260959.jpg', 1, 1, 1),
(2, 'El nombre del viento', 9788401352386, 28.50, 662, 2007, 'Una épica de acción y fantasía.', 10, 'el-nombre-del-viento-500x647.jpg', 2, 2, 1),
(3, 'Misery', 9780451169525, 21.95, 368, 1987, 'Un thriller psicológico lleno de acción.', 10, 'Misery_(1987)_front_cover,_first_edition.jpg', 3, 3, 1),
(4, 'El juego de Ender', 9788498722796, 19.75, 384, 1985, 'Ciencia ficción y estrategia militar.', 10, 'el-juego-de-ender-saga-de-ender-1.webp', 4, 4, 1),
(5, 'Jurassic Park', 9780345370778, 22.99, 448, 1990, 'Acción y aventura en un parque temático de dinosaurios.', 10, 'parque-jurasico-jurassic-park.webp', 5, 5, 1),
(6, 'Orgullo y prejuicio', 9788490650670, 18.99, 416, 1813, 'Una historia de amor y clases sociales.', 10, '6540f3a95dd2301ef9751dd6_H2tjHnUNhg_lBh5PnN9lJhXAfqX5EUHakOyByeEodU4.jpeg', 6, 6, 2),
(7, 'Cumbres Borrascosas', 9780141439556, 20.50, 464, 1847, 'Un clásico romance trágico.', 10, '625454187128ea32cdb140e8_6034d7d1f3e0f5072bb2b1ca_Cumbres-borrascosas-emily-bronte-editorial-alma.jpeg', 7, 7, 2),
(8, 'Bajo el sol de la toscana', 9788466608987, 16.95, 320, 1996, 'Romance en la pintoresca Toscana.', 10, 'bajo-el-sol-de-la-toscana-mayes-frances.jpg', 8, 4, 2),
(9, 'Eleanor Oliphant está perfectamente', 9788498388801, 22.75, 336, 2017, 'Una historia conmovedora de romance.', 10, '816J2V1smEL._SL1500_.jpg', 9, 8, 2),
(10, 'El diario de Ana Frank', 9789681675635, 19.99, 352, 1947, 'Un relato dramático de la Segunda Guerra Mundial.', 10, '71bL7cvLv9L._SL1500_.jpg', 10, 9, 3),
(11, 'Las uvas de la ira', 9788497597849, 24.50, 544, 1939, 'Drama sobre la Gran Depresión.', 10, 'las-uvas.jpg', 11, 3, 3),
(12, 'Mil soles espléndidos', 9788498380799, 23.95, 432, 2007, 'Drama y amistad en Afganistán.', 10, 'Mil soles espléndidos.jpg', 12, 8, 3),
(13, 'El cuaderno de Noah', 9788499180799, 18.99, 224, 1996, 'Una historia de amor dramática.', 10, 'cuaderno de noah.jpg', 13, 10, 3),
(14, 'El señor de las moscas', 9788466344172, 20.50, 224, 1954, 'Drama psicológico en una isla desierta.', 0, 'D_NQ_NP_2X_756542-MLC51294638359_082022-F.webp', 14, 4, 3),
(15, 'Dune', 9780441172719, 28.99, 694, 1965, 'Una épica de ciencia ficción en un desértico planeta.', 10, 'dune.jpg', 15, 11, 4),
(16, 'Neuromante', 9780441569595, 22.50, 271, 1984, 'Un clásico cyberpunk lleno de acción.', 10, '125528_portada_neuromante_william-gibson_202005041302.jpg', 16, 11, 4),
(17, 'Fundación', 9780553293357, 24.75, 255, 1951, 'Una saga de ciencia ficción que abarca milenios.', 10, 'trilogiafundacion_gr.jpg', 17, 12, 4),
(18, 'El fin de la eternidad', 9788498722796, 19.99, 191, 1955, 'Un viaje a través del tiempo y la historia.', 10, '978849793353.jfif', 17, 4, 4),
(19, 'Snow Crash', 9780553380958, 26.95, 480, 1992, 'Un thriller de realidad virtual y aventura.', 10, 'FRBPdf4XIAAiA3O.jpg', 18, 13, 4),
(20, 'El inversor inteligente', 9780060555665, 25.99, 640, 1949, 'El clásico sobre inversión en valor.', 10, '81XS4XRyEJL._SL1500_.jpg', 19, 14, 5),
(21, 'Padre rico, padre pobre', 9781612680170, 19.99, 336, 1997, 'Aprende a pensar como los ricos.', 10, 'portada-padre-rico-padre-pobre-1.jpg', 20, 15, 5),
(22, 'El código del dinero', 9788478086184, 18.50, 224, 2006, 'Descubre las leyes del dinero.', 10, '9788497775762.jfif', 21, 16, 5),
(23, 'Economía para el 99%', 9788430609884, 22.75, 320, 2019, 'Desafía las creencias sobre la economía moderna.', 10, 'economiaparael99.jpg', 22, 17, 5),
(24, 'El hombre más rico de Babilonia', 9788423423785, 15.99, 144, 1926, 'Consejos financieros basados en antiguos principios babilónicos.', 10, '380507_portada_el-hombre-mas-rico-de-babilonia_george-s-clason_202401291659.jpg', 23, 18, 5),
(25, 'El poder del ahora', 9788479536500, 21.99, 224, 1997, 'Una guía espiritual para el bienestar.', 10, '9788484452065.jpg', 24, 19, 6),
(26, 'Mujeres que corren con los lobos', 9788498720778, 29.50, 736, 1992, 'Explora la naturaleza femenina salvaje.', 10, '9788490705445.jpg', 25, 4, 6),
(27, 'La magia del orden', 9788408153087, 16.95, 224, 2014, 'Transforma tu hogar y tu vida.', 10, 'lamagiadelorden.jpg', 26, 15, 6),
(28, 'Piense y hágase rico', 9788497355730, 18.99, 320, 1937, 'Un clásico del desarrollo personal y la riqueza.', 10, 'piense-y-hagase-rico.webp', 27, 20, 6),
(31, 'me urge chamba', 123456789123, 5000000.00, 200, 2024, 'no hay plata', 1, '1709148802175_img.png', 5, 5, 5),
(33, '5', 555555555, 5.00, 5, 5, '5', 5, 'default-image.jpg', 5, 5, 5),
(35, 'Luna1', 123456789012, 100.00, 200, 2024, 'El único satélite del planeta Tierra', 15, '1711401200512_img.jpeg', 5, 5, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts_books`
--

CREATE TABLE `carts_books` (
  `cartBooks_id` int(11) NOT NULL,
  `cart_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `genre_id` int(11) NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`genre_id`, `name`) VALUES
(1, 'Accion'),
(6, 'Autoayuda'),
(7, 'Aventuras'),
(4, 'Ciencia Ficcion'),
(14, 'Cuento'),
(3, 'Drama'),
(5, 'Economia'),
(10, 'Humor'),
(12, 'Mitología'),
(11, 'Poesía'),
(8, 'Policíaca'),
(2, 'Romance'),
(13, 'Teatro'),
(9, 'Terror y misterio');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `publishers`
--

CREATE TABLE `publishers` (
  `publisher_id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `publishers`
--

INSERT INTO `publishers` (`publisher_id`, `name`) VALUES
(11, 'Ace Books'),
(15, 'Aguilar'),
(6, 'Alba Editorial'),
(13, 'Bantam Books'),
(5, 'Corgi'),
(3, 'Debolsillo'),
(18, 'Deusto'),
(4, 'Ediciones B'),
(16, 'Editorial Sirio'),
(9, 'Fondo de Cultura Económica'),
(20, 'Gestión 2000'),
(19, 'Grijalbo'),
(14, 'HarperCollins'),
(7, 'Penguin Classics'),
(2, 'Plaza & Janés'),
(10, 'Roca Editorial'),
(8, 'Salamandra'),
(12, 'Spectra'),
(17, 'Taurus'),
(1, 'Vintage');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `fullname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'UNIQUE',
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'UNIQUE',
  `birthday` date NOT NULL,
  `adress` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `fullname`, `username`, `email`, `birthday`, `adress`, `password`, `image`, `admin`) VALUES
(1, 'Pablo Hernández', 'PabloHernández', 'mgould0@soundcloud.com', '1997-06-11', 'callefalsa5', 'qQ6/tp2K', 'pablohernandez.jpg', 0),
(2, 'Mauricio García', 'MauricioGarcía', 'edorber1@netvibes.com', '1993-02-25', 'callefalsa10', 'wV0+t(85wdu&', 'Mauricio-Garcia-Villegas.jpg', 0),
(3, 'Leonardo Martínez', 'LeonardoMartínez', 'dtreuge2@hexun.com', '1989-07-03', 'callefalsa15', 'qK9|@vP>V3', '257750-f638x638-211152-269319-5050.jpg', 0),
(4, 'Esteban López', 'EstebanLópez', 'cvaneeden3@hexun.com', '2000-08-24', 'callefalsa20', 'hG9<2W', 'avatars-SpofZIy9rvWlyWoM-5T4jDw-t500x500.jpg', 0),
(5, 'Ricardo González', 'RicardoGonzález', 'sroman4@nature.com', '1999-12-30', 'callefalsa25', 'tK9/z?s/uF~G', 'ricardo-italian-open-1.jpg', 0),
(6, 'Soledad Pérez', 'SoledadPérez', 'bmckellen5@cocolog-nifty.com', '1985-04-15', 'callefalsa30', 'xV1|f8mH', 'llbsRX17_400x400.jpg', 0),
(7, 'Estefania Rodríguez', 'EstefaniaRodríguez', 'lkienzle6@livejournal.com', '2001-09-17', 'callefalsa35', 'zW6*_?hU', 'Untitled6.jpg', 0),
(8, 'Myriam Sánchez', 'MyriamSánchez', 'mwoffenden7@nih.gov', '1991-01-16', 'callefalsa40', 'kO3\\\\\\\"OM', '58.webp', 0),
(9, 'Patricia Cortez', 'PatriciaCortez', 'rfissenden8@netvibes.com', '2003-02-04', 'callefalsa45', 'nT9=AX<', 'dra-patricia-cortez-400x409.jpg', 0),
(10, 'Ingrid Pereyra', 'IngridPereyra', 'ngreensted9@state.gov', '1996-08-09', 'callefalsa50', 'dY6$V_9m,Ax(', 'INGRID-1200x1126.jpg', 0),
(11, 'Gerardo Zamora', 'PapiZamora', 'zamorita@mail.com', '1964-01-06', 'viano2345', '$2a$10$y2kn44TR3nGcu4143xHLw.r.H.OSvNaHCFDp/wasaVZwb2Zoqk3fa', '1709153401411_img.jpg', 0),
(13, 'Adolfo Antuz', 'adolfoantuz', 'adolfoantuz@mail.com', '1990-05-18', 'Calle Falsa 123', '$2a$10$Rx9oRwn.PzMlXK3ltjtJ/.2Uz9GFwMX2kY9TX7g6vlAEUCZHP.9wq', '1711399133979_img.gif', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`author_id`),
  ADD UNIQUE KEY `name` (`fullname`);

--
-- Indices de la tabla `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `books_fk_1` (`author_id`),
  ADD KEY `books_fk_2` (`genre_id`),
  ADD KEY `books_fk_3` (`publisher_id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `carts_books`
--
ALTER TABLE `carts_books`
  ADD PRIMARY KEY (`cartBooks_id`),
  ADD KEY `cartBooks_fk_2` (`book_id`),
  ADD KEY `cartBooks_fk_1` (`cart_id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`genre_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`publisher_id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `books`
--
ALTER TABLE `books`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `carts_books`
--
ALTER TABLE `carts_books`
  MODIFY `cartBooks_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_fk_1` FOREIGN KEY (`author_id`) REFERENCES `authors` (`author_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `books_fk_2` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`genre_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `books_fk_3` FOREIGN KEY (`publisher_id`) REFERENCES `publishers` (`publisher_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_fk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `carts_books`
--
ALTER TABLE `carts_books`
  ADD CONSTRAINT `cartBooks_fk_1` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `cartBooks_fk_2` FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
