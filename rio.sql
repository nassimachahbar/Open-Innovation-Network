-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2019 at 03:16 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rio`
--

-- --------------------------------------------------------

--
-- Table structure for table `conventions`
--

CREATE TABLE `conventions` (
  `id_convention` int(11) NOT NULL,
  `nom_partenaires` varchar(600) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `point_focal`
--

CREATE TABLE `point_focal` (
  `id_point_focal` int(11) NOT NULL,
  `nom_etablissement` varchar(600) NOT NULL,
  `budget_octroye` float NOT NULL,
  `budget_total` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `point_nodal`
--

CREATE TABLE `point_nodal` (
  `id_point_nodal` int(11) NOT NULL,
  `nom_etablissement` varchar(600) NOT NULL,
  `budget_octroye` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `projet`
--

CREATE TABLE `projet` (
  `id_projet` int(11) NOT NULL,
  `nom_projet` varchar(600) NOT NULL,
  `description` varchar(600) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `id_point_nodal` int(11) NOT NULL,
  `id_point_focal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `nom` varchar(600) NOT NULL,
  `prenom` varchar(600) NOT NULL,
  `email` varchar(600) NOT NULL,
  `mot_de_passe` varchar(600) NOT NULL,
  `role` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `conventions`
--
ALTER TABLE `conventions`
  ADD PRIMARY KEY (`id_convention`);

--
-- Indexes for table `point_focal`
--
ALTER TABLE `point_focal`
  ADD PRIMARY KEY (`id_point_focal`);

--
-- Indexes for table `point_nodal`
--
ALTER TABLE `point_nodal`
  ADD PRIMARY KEY (`id_point_nodal`);

--
-- Indexes for table `projet`
--
ALTER TABLE `projet`
  ADD PRIMARY KEY (`id_projet`),
  ADD KEY `fk_id_point_focal` (`id_point_focal`),
  ADD KEY `fk_id_point_nodal` (`id_point_nodal`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `projet`
--
ALTER TABLE `projet`
  ADD CONSTRAINT `fk_id_point_focal` FOREIGN KEY (`id_point_focal`) REFERENCES `point_focal` (`id_point_focal`),
  ADD CONSTRAINT `fk_id_point_nodal` FOREIGN KEY (`id_point_nodal`) REFERENCES `point_nodal` (`id_point_nodal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
