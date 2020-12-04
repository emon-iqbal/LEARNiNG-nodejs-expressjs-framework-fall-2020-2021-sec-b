-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 04, 2020 at 11:05 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `o_computer_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `components`
--

CREATE TABLE `components` (
  `userID` int(11) NOT NULL,
  `c_name` varchar(100) NOT NULL,
  `c_catagories` varchar(100) NOT NULL,
  `c_types` varchar(100) NOT NULL,
  `c_brands` varchar(100) NOT NULL,
  `c_m_reviews` varchar(100) NOT NULL,
  `c_COST` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `components`
--

INSERT INTO `components` (`userID`, `c_name`, `c_catagories`, `c_types`, `c_brands`, `c_m_reviews`, `c_COST`) VALUES
(1, 'RAM', 'storage', 'permanent', 'ASUS', 'DD4 ram with latest features available for laptops', 2102),
(2, 'Casing', 'CPU protector/Cover', 'Hardware', 'BitFenix', 'The best and greatest casing is there in our arena ', 4600);

-- --------------------------------------------------------

--
-- Table structure for table `ram_table`
--

CREATE TABLE `ram_table` (
  `id` int(11) NOT NULL,
  `ram_name` varchar(100) NOT NULL,
  `type` varchar(100) NOT NULL,
  `capacity` varchar(100) NOT NULL,
  `speed` varchar(100) NOT NULL,
  `manufacturer_review` varchar(100) NOT NULL,
  `cost` int(11) NOT NULL,
  `picture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ram_table`
--

INSERT INTO `ram_table` (`id`, `ram_name`, `type`, `capacity`, `speed`, `manufacturer_review`, `cost`, `picture`) VALUES
(2, 'Corsair Dominator Platinum', 'DDR4', '16gb', '3000mHz', 'The greatest and better upgraded versions of DDR4 has been arrived with speeds up to 3,600 MHz', 18000, 'ram-1.jpg'),
(3, 'Corsair Vengeance LED', 'DDR4', '16GB Kit (2 x 8GB)', '3200mHz', 'Need BIOS update to run at 3200MHz...Corsair’s Vengeance LED DDR4 series also features CL16 latency ', 12500, 'ram-2.jpg'),
(4, 'Kingston HyperX Fury', 'DDR4, RGB', '4GB, 8GB, 16GB, 32GB', 'up to 3733MHz', 'Affordable at lower speeds, 3733MHz speed is pricey, this smart DDR3 or DDR4 RAM auto-detects system', 9500, 'ram-3.jpg'),
(5, 'G.Skill Trident Z', 'DDR4, RGB DC', '64GB (2x32GB)', '3200mHz', 'Twice the number of memory chips,Great build quality,And, when you want more RAM than you’ll know wh', 12000, 'ram-4.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_table`
--

CREATE TABLE `user_table` (
  `userID` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `userType` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `picture` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_table`
--

INSERT INTO `user_table` (`userID`, `username`, `password`, `userType`, `email`, `picture`) VALUES
(1, 'emon', 'emon_aiub', 'admin', 'rasjbi@yahoo.com', 'adminishere.png'),
(2, 'r_iqbal', 'ras_aiub', 'customer', 'riqbal@linkedin.com', 'mypic.jpg'),
(3, 'masonMount', 'mason_mount', 'admin', 'mychelsea@gmail.com', 'walzin_3.jpg'),
(4, 'tamz', 'tmz323', 'admin', 'tamzid@gmail.com', 'npmjsapwt.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `components`
--
ALTER TABLE `components`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `ram_table`
--
ALTER TABLE `ram_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_table`
--
ALTER TABLE `user_table`
  ADD PRIMARY KEY (`userID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `components`
--
ALTER TABLE `components`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ram_table`
--
ALTER TABLE `ram_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_table`
--
ALTER TABLE `user_table`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
