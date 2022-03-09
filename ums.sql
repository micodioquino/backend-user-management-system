-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 09, 2022 at 10:55 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ums`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(65) NOT NULL,
  `lname` varchar(65) NOT NULL,
  `contact` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `address` text NOT NULL,
  `postal` int(11) NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `contact`, `username`, `email`, `password`, `address`, `postal`, `updatedAt`, `createdAt`) VALUES
(60, 'micos', 'dioquino', '09126072943', 'admisn', 'micodioquino17s@gmail.com', '$2a$10$GxcQE8IFzLD4ohJZTsFPOeR6Ih3N7heGX6v5r7LakV3w7Kz78JjmK', 'calasiao, pangasinan', 2418, '2022-03-09 21:39:52', '2022-03-09 21:39:52'),
(61, 'micos', 'dioquino', '09126072943', 'admisdn', 'micodioquino17ds@gmail.com', '$2a$10$HmqPa4Wm4MS5dHL98xonCuym.t16DgILu5VE1zKhOwLvFRn.ocxha', 'calasiao, pangasinan', 2418, '2022-03-09 21:39:54', '2022-03-09 21:39:54'),
(62, 'micos', 'dioquino', '09126072943', 'admisdsdn', 'micodioquino17ddss@gmail.com', '$2a$10$K8/vFfu6emJbAGVsCOSyBedBJosYh1mA6PTjGnEPKiPFcchY7o74C', 'calasiao, pangasinan', 2418, '2022-03-09 21:39:57', '2022-03-09 21:39:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
