-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2022 at 04:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `incidencias`
--

CREATE TABLE `incidencias` (
  `id` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `idtipoincidencia` int(11) NOT NULL,
  `estado` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `incidencias`
--

INSERT INTO `incidencias` (`id`, `idusuario`, `idtipoincidencia`, `estado`, `descripcion`,`createdAt`, `updatedAt`) VALUES
(3, 18338, 1, 'Male', 'incidencia prueba', '2022-03-29 03:23:37', '2022-03-29 03:23:37'),
(5, 18338, 2, 'Male', 'incidencia prueba 2', '2022-04-29 03:23:37', '2022-04-29 03:23:37'),
(6, 18338, 1, 'Male', 'incidencia prueba 3', '2022-05-29 03:23:37', '2022-05-29 03:23:37'),
(9, 18338, 1, 'Male', 'incidencia prueba 4', '2022-06-29 03:23:37', '2022-06-29 03:23:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `incidencias`
--
ALTER TABLE `incidencias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `incidencias`
--
ALTER TABLE `incidencias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
