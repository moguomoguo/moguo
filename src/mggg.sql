/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mggg

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-27 14:20:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `off` varchar(255) DEFAULT NULL,
  `star` varchar(255) DEFAULT NULL,
  `commentCount` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('4', '新疆库尔勒香梨2kg', 'fruit', '../images/201803050940308008.jpg', '#', '545', '0.1', '4', '453');
INSERT INTO `car` VALUES ('8', '海南西州蜜瓜4kg', 'Pear', '../images/201805071635458045.jpg', '#', '385', '0.5', '4', '826');
INSERT INTO `car` VALUES ('15', '美国进口红提子4kg', 'apple', '../images/201803051143224050.jpg', '#', '468', '0.5', '4', '450');

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `off` varchar(255) DEFAULT NULL,
  `star` varchar(255) DEFAULT NULL,
  `commentCount` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '美国进口红提子4kg', 'fruit', '../images/201511091700267012.jpg', '#', '24', '0.4', '4', '100');
INSERT INTO `list` VALUES ('2', '山东红富士苹果80#15kg', 'apple', '../images/201702040946359011.jpg', '#', '698', '0.3', '4', '454');
INSERT INTO `list` VALUES ('3', '河北蜜梨12kg', 'Pear', '../images/201803050930275046.jpg', '#', '398', '0.6', '4', '123');
INSERT INTO `list` VALUES ('4', '海南椰子(单个)约900g', 'fruit', '../images/201803050940308008.jpg', '#', '545', '0.1', '4', '453');
INSERT INTO `list` VALUES ('5', '山东A级水晶富士7.5kg', 'apple', '../images/201803050944669013.jpg', '#', '947', '0.2', '4', '231');
INSERT INTO `list` VALUES ('9', '新疆库尔勒香梨2kg', 'Pear', '../images/201805071635458045.jpg', '#', '88', '0.6', '4', '359');
INSERT INTO `list` VALUES ('8', '河北蜜梨12kg', 'Pear', '../images/201806221705715030.jpg', '#', '385', '0.5', '4', '826');
INSERT INTO `list` VALUES ('6', '广东精选杨桃6个装', 'peach', '../images/201805071625672052.jpg', '#', '25', '0.4', '3', '754');
INSERT INTO `list` VALUES ('10', '南非柠檬6枚盒装', 'fruit', '../images/201805071625672052.jpg', '#', '568', '0.3', '4', '453');
INSERT INTO `list` VALUES ('11', '美国无籽黑提4.5kg', 'fruit', '../images/201805071635458045.jpg', '#', '961', '0.5', '4', '455');
INSERT INTO `list` VALUES ('12', '海南西州蜜瓜4kg', 'honeydew melon', '../images/201805071638797037.jpg', '#', '357', '0.7', '4', '855');
INSERT INTO `list` VALUES ('13', '海南西州蜜瓜7.5kg', 'honeydew melon', '../images/201805071640139001.jpg', '#', '158', '0.5', '4', '345');
INSERT INTO `list` VALUES ('14', '美国无籽黑提1kg', 'fruit', '../images/201806221704737049.jpg', '#', '751', '0.1', '4', '867');
INSERT INTO `list` VALUES ('15', '新西兰红玫瑰苹果4.5kg', 'apple', '../images/201806221705715030.jpg', '#', '468', '0.5', '4', '450');
INSERT INTO `list` VALUES ('16', '新疆库尔勒香梨2kg', 'Pear', '../images/201806221709313013.jpg', '#', '628', '0.6', '4', '354');
INSERT INTO `list` VALUES ('17', '广东精选杨桃6个装', 'peach', '../images/201806221713336037.jpg', '#', '385', '0.5', '4', '453');
INSERT INTO `list` VALUES ('18', '依谷精品高山娃娃菜450g', 'vegetables', '../images/201806221719520011.jpg', '#', '586', '0.3', '4', '878');
INSERT INTO `list` VALUES ('19', '依谷生态白玉菇150g', 'vegetables', '../images/201806221802864010.jpg', '#', '568', '0.8', '4', '986');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('16', 'mggg', 'e10adc3949ba59abbe56e057f20f883e');
INSERT INTO `user` VALUES ('17', 'mgggg', 'e10adc3949ba59abbe56e057f20f883e');
SET FOREIGN_KEY_CHECKS=1;
