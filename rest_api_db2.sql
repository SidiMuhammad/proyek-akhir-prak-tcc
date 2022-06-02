-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 23, 2022 at 11:18 PM
-- Server version: 5.7.38-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rest_api_db2`
--

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id_post` int(11) NOT NULL,
  `title` text NOT NULL,
  `content` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id_post`, `title`, `content`) VALUES
(1, 'Lorem ipsum dolor sit ametis', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel ex odio. Duis ut ligula ipsum. Aliquam erat volutpat. Nunc non mauris ut elit placerat venenatis. Sed dapibus interdum nibh. Suspendisse et cursus massa, facilisis luctus leo. Etiam id odio eu elit sodales fringilla. Nullam condimentum quis risus sit amet venenatis. Pellentesque quis libero vehicula, elementum libero eu, eleifend sem. Aenean vitae vehicula mauris. '),
(4, 'aaaaaaaaaaaas', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel ex odio. Duis ut ligula ipsum. Aliquam erat volutpat. Nunc non mauris ut elit placerat venenatis. Sed dapibus interdum nibh. Suspendisse et cursus massa, facilisis luctus leo. Etiam id odio eu elit sodales fringilla. Nullam condimentum quis risus sit amet venenatis. Pellentesque quis libero vehicula, elementum libero eu, eleifend sem. Aenean vitae vehicula mauris. ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id_post`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
