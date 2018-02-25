-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2018 at 04:47 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `forum-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE IF NOT EXISTS `post` (
  `id` int(11) NOT NULL,
  `title` varchar(2000) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  `category` varchar(2000) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  `content` varchar(20000) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  `created_at` varchar(200) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `category`, `content`, `created_at`) VALUES
(1, 'Go to Market tomorrow', 'done', NULL, NULL),
(2, 'Email to manager', 'pending', NULL, NULL),
(3, 'Push code to GitHub', 'done', NULL, NULL),
(4, 'Go For Running', 'done', NULL, NULL),
(5, 'Go to Movie', 'pending', NULL, NULL),
(6, 'Testing this out', 'pending', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `name` varchar(2000) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  `email` varchar(1000) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  `password` varchar(2000) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL,
  `created_at` varchar(200) CHARACTER SET ascii COLLATE ascii_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `created_at`) VALUES
(1, 'Oluwatobi Amusan', 'amusantobi@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-02-25 01:15:20.604'),
(2, 'Gloria Fredrick', 'fredrickgloria1@gmail.com', '5f4dcc3b5aa765d61d8327deb882cf99', '2018-02-25 01:15:44.725');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
