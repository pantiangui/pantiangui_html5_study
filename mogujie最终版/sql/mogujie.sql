/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50721
Source Host           : localhost:3306
Source Database       : mogujie

Target Server Type    : MYSQL
Target Server Version : 50721
File Encoding         : 65001

Date: 2018-10-25 21:19:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cart
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cart_id` int(15) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) NOT NULL,
  `goods_id` varchar(255) CHARACTER SET armscii8 NOT NULL COMMENT 'utf8',
  `goods_num` varchar(1000) NOT NULL,
  `goods_size` varchar(255) NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('5', '1', '1010012', '5', 'XXXL');
INSERT INTO `cart` VALUES ('8', '10', '1010002', '3', '均码');
INSERT INTO `cart` VALUES ('10', '11', '1010008', '1', 'XL');
INSERT INTO `cart` VALUES ('11', '11', '1010015', '2', 'XXXL');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `goods_id` int(15) NOT NULL,
  `goods_name` varchar(1000) NOT NULL,
  `goods_price` decimal(10,2) NOT NULL,
  `goods_cost_price` decimal(10,2) DEFAULT NULL,
  `goods_size` varchar(255) DEFAULT NULL,
  `goods_num` int(5) NOT NULL,
  `goods_img` varchar(500) NOT NULL,
  `goods_colorimg` varchar(800) DEFAULT NULL,
  `goods_colorimg_title` varchar(800) DEFAULT NULL,
  `goods_assess` int(15) DEFAULT NULL,
  `goods_sales` int(15) DEFAULT NULL,
  PRIMARY KEY (`goods_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1010001', '韩版时髦新款翻领双排扣纯色长袖挺括显瘦双面呢大衣长款毛呢外套', '169.40', '242.00', 'S&M&L', '2500', 'img/goods_img/101000100.jpg&img/goods_img/101000101.jpg&img/goods_img/101000102.jpg&img/goods_img/101000103.jpg&img/goods_img/101000104.jpg&img/goods_img/101000105.jpg', 'img/goods_colorimg/10100010001.jpg&', '', '12', '192');
INSERT INTO `goods` VALUES ('1010002', '2018秋季女装新款韩版慵懒风流苏毛衣外套女宽松网红百搭长袖中长款学生套头针织衫上衣', '75.00', '105.00', '均码', '437', 'img/goods_img/101000200.jpg&img/goods_img/101000201.jpg&img/goods_img/101000202.jpg&img/goods_img/101000203.jpg&img/goods_img/101000204.jpg&img/goods_img/101000205.jpg', 'img/goods_colorimg/10100020001.jpg&img/goods_colorimg/10100020002.jpg&img/goods_colorimg/10100020003.jpg&', '', '55', '899');
INSERT INTO `goods` VALUES ('1010003', '珊珊2018新款女长袖韩版超火宽松卫衣女连帽字母图案bf上衣秋季女', '69.00', '111.00', 'S&M&L', '501', 'img/goods_img/101000300.jpg&img/goods_img/101000301.jpg&img/goods_img/101000302.jpg&img/goods_img/101000303.jpg&img/goods_img/101000304.jpg&img/goods_img/101000305.jpg', 'img/goods_colorimg/10100030001.jpg&img/goods_colorimg/10100030002.jpg&img/goods_colorimg/10100030003.jpg&img/goods_colorimg/10100030004.jpg&', '', '65', '789');
INSERT INTO `goods` VALUES ('1010004', '优雅气质新款翻领双排扣袖拌长袖纯色宽松显瘦学生休闲中长款风衣外套', '149.00', '198.00', 'S&M&L', '2910', 'img/goods_img/101000400.jpg&img/goods_img/101000401.jpg&img/goods_img/101000402.jpg', 'img/goods_colorimg/10100040001.jpg&', '', '555', '701');
INSERT INTO `goods` VALUES ('1010005', '卫衣女2018秋冬新款韩版连帽休闲宽松时尚加绒长袖慵懒风学生大码外套上衣', '89.00', '129.00', 'M&L&XL&XXL', '2001', 'img/goods_img/101000500.jpg&img/goods_img/101000501.jpg&img/goods_img/101000502.jpg&img/goods_img/101000503.jpg&img/goods_img/101000504.jpg&img/goods_img/101000505.jpg', 'img/goods_colorimg/10100050001.jpg&img/goods_colorimg/10100050002.jpg&img/goods_colorimg/10100050003.jpg&', '', '56', '88');
INSERT INTO `goods` VALUES ('1010006', '早秋卫衣女无帽加厚加绒秋冬季套头圆领宽松韩版潮学生短款外套女', '58.99', '84.29', '均码', '1095', 'img/goods_img/101000600.jpg&img/goods_img/101000601.jpg&img/goods_img/101000602.jpg&img/goods_img/101000603.jpg&img/goods_img/101000604.jpg&', 'img/goods_colorimg/10100060001.jpg&img/goods_colorimg/10100060002.jpg&img/goods_colorimg/10100060003.jpg&img/goods_colorimg/10100060004.jpg&', '', '564', '622');
INSERT INTO `goods` VALUES ('1010007', '2018秋季新款网红百搭中长款ulzzang连帽外套宽松bf小香风粗花呢上衣女', '158.99', '225.99', 'S&M&L', '899', 'img/goods_img/101000700.jpg&img/goods_img/101000701.jpg&img/goods_img/101000702.jpg&img/goods_img/101000703.jpg&img/goods_img/101000704.jpg&img/goods_img/101000705.jpg&img/goods_img/101000706.jpg', 'img/goods_colorimg/10100070001.jpg&', '', '456', '564');
INSERT INTO `goods` VALUES ('1010008', '秋季新款中长款百搭宽松显瘦长袖复古外套撞色格子后背字母印花衬衣开衫韩版学生翻领排扣衬衫女', '89.00', '122.99', 'S&M&L&XL', '21991', 'img/goods_img/101000800.jpg&img/goods_img/101000801.jpg&img/goods_img/101000802.jpg&img/goods_img/101000803.jpg', 'img/goods_colorimg/10100080001.jpg&', '', '256', '321');
INSERT INTO `goods` VALUES ('1010009', '秋季新款韩版纯色宽松灯笼袖中长款针织开衫女学生长款毛衣披肩外套', '98.00', '140.00', '均码', '556', 'img/goods_img/101000900.jpg&img/goods_img/101000901.jpg&img/goods_img/101000902.jpg&img/goods_img/101000903.jpg', 'img/goods_colorimg/10100090001.jpg&img/goods_colorimg/10100090002.jpg&img/goods_colorimg/10100090003.jpg&img/goods_colorimg/10100090004.jpg&', '', '700', '874');
INSERT INTO `goods` VALUES ('1010010', '明星同款秋季新款英伦风短款西装领双排扣格子西服外套女韩版休闲显廋气质长袖外套上衣', '101.21', '149.25', 'S&M&L&XL', '3271', 'img/goods_img/101001000.jpg&img/goods_img/101001001.jpg&img/goods_img/101001002.jpg', 'img/goods_colorimg/10100100001.jpg&', '', '66', '89');
INSERT INTO `goods` VALUES ('1010011', '男士外套春秋装2018新款个性潮流夹克男纯色韩版休闲帅气修身春秋季衣服男', '129.00', '179.00', 'M&L&XL&XXL', '15996', 'img/goods_img/101001100.jpg&img/goods_img/101001101.jpg&img/goods_img/101001102.jpg&img/goods_img/101001103.jpg&img/goods_img/101001104.jpg&img/goods_img/101001105.jpg', 'img/goods_colorimg/10100110001.jpg&img/goods_colorimg/10100110002.jpg&img/goods_colorimg/10100110003.jpg&img/goods_colorimg/10100110004.jpg&', '', '45', '99');
INSERT INTO `goods` VALUES ('1010012', '2018秋冬季新款港风文艺假两件连帽休闲男士夹克外套韩版青年潮流百搭灯芯绒外套男上衣', '169.40', '197.45', 'M&L&XL&XXL&XXXL', '5691', 'img/goods_img/101001200.jpg&img/goods_img/101001201.jpg&img/goods_img/101001202.jpg&img/goods_img/101001203.jpg&img/goods_img/101001204.jpg', 'img/goods_colorimg/10100120001.jpg&img/goods_colorimg/10100120002.jpg&img/goods_colorimg/10100120003.jpg&', '', '454', '554');
INSERT INTO `goods` VALUES ('1010013', '2018情侣装秋季新款ins宽松韩版原宿风针织衫口袋刺绣小猫情侣毛衣冬男女学生毛衫', '99.00', '142.00', 'S&M&L&XL', '6621', 'img/goods_img/101001300.jpg&img/goods_img/101001301.jpg&img/goods_img/101001302.jpg&img/goods_img/101001303.jpg&img/goods_img/101001304.jpg&img/goods_img/101001305.jpg', 'img/goods_colorimg/10100130001.jpg&img/goods_colorimg/10100130002.jpg&img/goods_colorimg/10100130003.jpg&img/goods_colorimg/10100130004.jpg&', '', '66', '71');
INSERT INTO `goods` VALUES ('1010014', '男士西服男春秋季休闲西装潮流青年帅气上衣单件韩版潮流小西装外套', '168.00', '240.00', 'M&L&XL&XXL&XXXL', '4122', 'img/goods_img/101001400.jpg&img/goods_img/101001401.jpg&img/goods_img/101001402.jpg&img/goods_img/101001403.jpg&img/goods_img/101001404.jpg&img/goods_img/101001405.jpg', 'img/goods_colorimg/10100140001.jpg&img/goods_colorimg/10100140002.jpg&img/goods_colorimg/10100140003.jpg&img/goods_colorimg/10100140004.jpg&', '', '89', '121');
INSERT INTO `goods` VALUES ('1010015', '2018新款半高领毛衣男秋冬季加厚韩版宽松学生青年毛衫潮流男生针织线衣男装宽松衣服打底衫', '88.00', '129.00', 'M&L&XL&XXL&XXXL', '556', 'img/goods_img/101001500.jpg&img/goods_img/101001501.jpg&img/goods_img/101001502.jpg&img/goods_img/101001503.jpg', 'img/goods_colorimg/10100150001.jpg&img/goods_colorimg/10100150002.jpg&img/goods_colorimg/10100150003.jpg&img/goods_colorimg/10100150004.jpg&img/goods_colorimg/10100150005.jpg&img/goods_colorimg/10100150006.jpg&img/goods_colorimg/10100150007.jpg&', '', '88', '223');
INSERT INTO `goods` VALUES ('1020001', '时尚套装两件套秋季女装新款韩版宽松小清新气质休闲撞色针织衫毛衣外套学生显瘦百搭针织半身裙女', '119.00', '156.00', 'S&M&L', '899', 'img/goods_img/102000100.jpg&img/goods_img/102000101.jpg&img/goods_img/102000102.jpg&img/goods_img/102000103.jpg', 'img/goods_colorimg/10200010001.jpg&img/goods_colorimg/10200010002.jpg&img/goods_colorimg/10200010003.jpg&', '', '115', '181');
INSERT INTO `goods` VALUES ('1020002', '秋季新款套装时尚三件套2018韩版宽松港味长袖毛呢外套女百搭显瘦长袖衬衫显瘦休闲半身裙子', '199.00', '289.00', 'S&M&L', '3144', 'img/goods_img/102000200.jpg&img/goods_img/102000201.jpg&img/goods_img/102000202.jpg&img/goods_img/102000203.jpg', 'img/goods_colorimg/10200020001.jpg&img/goods_colorimg/10200020002.jpg&', '', '548', '652');
INSERT INTO `goods` VALUES ('1020003', '秋季新款2018韩版宽松小清新甜美气质长袖套头毛衣外套女百搭显瘦休闲裤阔腿裤套装时尚两件套', '129.00', '241.00', 'S&M&L&XL', '1569', 'img/goods_img/102000300.jpg&img/goods_img/102000301.jpg&img/goods_img/102000302.jpg&img/goods_img/102000303.jpg&img/goods_img/102000304.jpg', 'img/goods_colorimg/10200030001.jpg&img/goods_colorimg/10200030002.jpg&', '', '86', '94');
INSERT INTO `goods` VALUES ('1020004', '韩版chic套装裙早秋新款女装港味初秋季小清新网红俏皮成熟街拍休闲显瘦两件套', '99.40', '142.00', 'S&M&L&XL', '3644', 'img/goods_img/102000400.jpg&img/goods_img/102000401.jpg&img/goods_img/102000402.jpg&img/goods_img/102000403.jpg', 'img/goods_colorimg/10200040001.jpg&', '', '78', '87');
INSERT INTO `goods` VALUES ('1030001', '男士外套秋季新款工装夹克韩版街头宽松嘻哈中长款连帽风衣', '139.00', '199.00', 'M&L&XL&2XL&3XL&4XL&5XL', '1359', 'img/goods_img/103000100.jpg&img/goods_img/103000101.jpg&img/goods_img/103000102.jpg&img/goods_img/103000103.jpg&img/goods_img/103000104.jpg', 'img/goods_colorimg/10300010001.jpg&img/goods_colorimg/10300010002.jpg&', '', '15', '32');
INSERT INTO `goods` VALUES ('1030002', '空军一号男鞋高帮运动韩版网红鞋嘻哈板鞋原宿风潮鞋子涂鸦高帮情侣款小白鞋运动休闲板鞋', '108.50', '155.00', '35&36&37&38&39&40&41&42&43', '1316', 'img/goods_img/103000200.jpg&img/goods_img/103000201.jpg&img/goods_img/103000202.jpg', 'img/goods_colorimg/10300020001.jpg&img/goods_colorimg/10300020002.jpg&img/goods_colorimg/10300020003.jpg&', '', '158', '231');
INSERT INTO `goods` VALUES ('1030003', '春秋季男士外套秋装新款韩版潮流休闲百搭绣花字母夹克衫青少年男装时尚学生修身帅气上衣服夹克男', '138.00', '197.00', 'M/165&L/170&XL/175&2XL/180', '5121', 'img/goods_img/103000300.jpg&img/goods_img/103000301.jpg&img/goods_img/103000302.jpg&img/goods_img/103000303.jpg', 'img/goods_colorimg/10300030001.jpg&img/goods_colorimg/10300030002.jpg&img/goods_colorimg/10300030003.jpg&img/goods_colorimg/10300030004.jpg&', '', '56', '62');
INSERT INTO `goods` VALUES ('1030004', '春秋季新款男士英伦皮鞋厚底增高男鞋子尖头商务休闲皮鞋男士系带皮鞋男婚鞋大码男鞋加绒保暖皮鞋', '139.25', '199.00', '37&38&39&40&41&42&43&44&45&46', '842', 'img/goods_img/103000400.jpg&img/goods_img/103000401.jpg&img/goods_img/103000402.jpg&img/goods_img/103000403.jpg&img/goods_img/103000404.jpg', 'img/goods_colorimg/10300040001.jpg&img/goods_colorimg/10300040002.jpg&img/goods_colorimg/10300040003.jpg&', '', '18', '89');
INSERT INTO `goods` VALUES ('1030005', '耐克 NIKE AIR VAPORMAX FLYKNIT 2 樱花粉女子跑步鞋气垫运动鞋', '419.00', '655.00', '36&37&38&39&40&41&42&43&44', '855', 'img/goods_img/103000500.jpg&img/goods_img/103000501.jpg&img/goods_img/103000502.jpg&img/goods_img/103000503.jpg', 'img/goods_colorimg/10300050001.jpg&img/goods_colorimg/10300050002.jpg&img/goods_colorimg/10300050003.jpg&', '', '458', '581');
INSERT INTO `goods` VALUES ('1030006', '2018新款秋季毛衣男韩版青少年时尚休闲百搭打底衫套头衣服男宽松个性简约上衣男外穿潮流', '79.00', '198.00', 'M&L&XL&XXL&XXXL', '1556', 'img/goods_img/103000600.jpg&img/goods_img/103000601.jpg', 'img/goods_colorimg/10300060001.jpg&img/goods_colorimg/10300060002.jpg&', '', '664', '781');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '18775859829', '123', '小P');
INSERT INTO `user` VALUES ('11', '18677895226', '123456', 'aaa');
SET FOREIGN_KEY_CHECKS=1;
