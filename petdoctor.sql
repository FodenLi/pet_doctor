/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : petdoctor

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 29/10/2023 19:49:01
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for consultation_share
-- ----------------------------
DROP TABLE IF EXISTS `consultation_share`;
CREATE TABLE `consultation_share`  (
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `netname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dis_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `disease` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `dis_type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `doctorname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `recovery_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `replycontent` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT ''
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of consultation_share
-- ----------------------------
INSERT INTO `consultation_share` VALUES ('问诊', '网友1235', '2020-06-22 11.25', '两天没有吃东西，精神一般，鼻子不湿润，今天吐了，胃里没东西所以吐的都是黄水......', '胃病', '张婷医生', '2020-06-22 11：25', '它年龄多大了？');

-- ----------------------------
-- Table structure for doctor_info
-- ----------------------------
DROP TABLE IF EXISTS `doctor_info`;
CREATE TABLE `doctor_info`  (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `doctorname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `workyears` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `consultation_number` int(11) NULL DEFAULT NULL,
  `score` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `follower_number` int(11) NULL DEFAULT NULL,
  `direction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `selfintruduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `issub` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_info
-- ----------------------------
INSERT INTO `doctor_info` VALUES (1, '医生', '张婷', '6', '骨科', '主任医师', 1254, '4.8', 1284, '宠物常见骨科病，骨折，骨质疏松等', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 6.00, '已关注');
INSERT INTO `doctor_info` VALUES (2, '医生', '谢馨宇', '5', '呼吸科', '主任医师', 1299, '4.6', 1268, '治疗宠物骨折多年，有过重度骨折治愈的经验', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 4.00, '关注');
INSERT INTO `doctor_info` VALUES (4, '医生', '黄小雨', '9', '内脏科', '主任医师', 1299, '5.0', 1523, '宠物常见骨科病，骨折，骨质疏松等', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 9.00, '关注');
INSERT INTO `doctor_info` VALUES (5, '医生', '肖婷', '4', '泌尿科', '主任医师', 1235, '4.2', 1236, '宠物常见骨科病，骨折，骨质疏松等', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 5.00, '关注');
INSERT INTO `doctor_info` VALUES (6, '医生', '黄杰', '5', '呼吸科', '主任意思', 1254, '4.8', 1524, '宠物常见骨科病，骨折，骨质疏松等', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 8.00, '关注');

-- ----------------------------
-- Table structure for doctor_info2
-- ----------------------------
DROP TABLE IF EXISTS `doctor_info2`;
CREATE TABLE `doctor_info2`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `doctorname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `workyears` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `consultation_number` int(11) NULL DEFAULT NULL,
  `score` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `follower_number` int(11) NULL DEFAULT NULL,
  `direction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `selfintruduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_info2
-- ----------------------------
INSERT INTO `doctor_info2` VALUES (1, '医生', '张婷', '6', '骨科', '主任医师', 1254, '4.8', 1284, '宠物常见骨科病，骨折，骨质疏松等', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 6.00);
INSERT INTO `doctor_info2` VALUES (2, '医生', '谢馨宇', '5', '呼吸科', '主任医师', 1299, '4.6', 1268, '治疗宠物骨折多年，有过重度骨折治愈的经验', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 4.00);

-- ----------------------------
-- Table structure for doctor_user
-- ----------------------------
DROP TABLE IF EXISTS `doctor_user`;
CREATE TABLE `doctor_user`  (
  `id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tel` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of doctor_user
-- ----------------------------
INSERT INTO `doctor_user` VALUES ('1', '14859690909', '123333');
INSERT INTO `doctor_user` VALUES ('2', '15058098459', '111222');
INSERT INTO `doctor_user` VALUES ('3', '16007070909', '333333');
INSERT INTO `doctor_user` VALUES ('4', '17080805678', '123123');
INSERT INTO `doctor_user` VALUES ('5', '14565658787', '555555');
INSERT INTO `doctor_user` VALUES ('6', '15675758888', '666666');
INSERT INTO `doctor_user` VALUES ('7', '16798986767', '777777');

-- ----------------------------
-- Table structure for medical_records
-- ----------------------------
DROP TABLE IF EXISTS `medical_records`;
CREATE TABLE `medical_records`  (
  `medical_record_id` int(11) NOT NULL AUTO_INCREMENT,
  `hospital` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `clinic_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fee` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fore_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_clinic` tinyint(255) NOT NULL,
  `diagnostic` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `pet_nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `card_num` int(11) NOT NULL,
  PRIMARY KEY (`medical_record_id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of medical_records
-- ----------------------------
INSERT INTO `medical_records` VALUES (1, '成都市武侯区第一宠物医院', '张婷', '2021-06-22 00:00:00', '6', '2021-06-22 00:00:00', 1, '因误食造成的呕吐，拉肚子', '小柴', 45566);

-- ----------------------------
-- Table structure for pet_info
-- ----------------------------
DROP TABLE IF EXISTS `pet_info`;
CREATE TABLE `pet_info`  (
  `id` tinyint(255) NOT NULL AUTO_INCREMENT,
  `nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sex` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `species` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cardNumber` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `weight` double(255, 0) NULL DEFAULT NULL,
  `isJueyu` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 49 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pet_info
-- ----------------------------
INSERT INTO `pet_info` VALUES (48, '11', 'MM', '22', '33', '11111', 44, '未绝育', '66666');
INSERT INTO `pet_info` VALUES (43, '小柴', 'MM', '柴犬', '5', '11111', 5, '未绝育', '');

-- ----------------------------
-- Table structure for pet_wiki
-- ----------------------------
DROP TABLE IF EXISTS `pet_wiki`;
CREATE TABLE `pet_wiki`  (
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `release_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `theme` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content1` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content2` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content3` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content4` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of pet_wiki
-- ----------------------------
INSERT INTO `pet_wiki` VALUES ('百科', '宠物常见的呼吸系统疾病', '2021-06-21 12：25', '宠物常见的疾病', '呼吸道疾病的主要症状表现在体温、咳嗽、面部分泌物、呼吸、状况、机体特征六个方面。如果出现了这些症状可初步判断为呼吸道疾病，并因及时就医，对症下药。', '体温：体温轻度升高或升高，甚至出现稽留热（临床上常见的一种热型。体温上升后即恒定地维持在较高水平）；\n', '面部分泌物：卡他性结膜炎（卡他性结膜炎是一种有细菌感染所致的常见的传染性眼病，又称细菌性结膜炎）、脓性眼屎、鼻镜干裂、清鼻涕、脓鼻涕、铁锈鼻涕、鼻出血等；', '机体特征：毛发零乱无光泽、鼻镜干裂、结膜炎、淋巴结肿大、牙龈及舌苔紫绀、心跳加速、肺部罗音、喘鸣音、胸痛等。');

-- ----------------------------
-- Table structure for registration_records
-- ----------------------------
DROP TABLE IF EXISTS `registration_records`;
CREATE TABLE `registration_records`  (
  `records_id` int(11) NOT NULL,
  `hospital` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctor` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `clinic_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fee` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `fore_time` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_clinic` tinyint(255) NOT NULL,
  `pet_nickName` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `card_num` int(11) NOT NULL,
  PRIMARY KEY (`records_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of registration_records
-- ----------------------------
INSERT INTO `registration_records` VALUES (1, '成都市武侯区第一宠物医院', '张婷', '2021-06-22 00:00:00', '6', '2021-06-22 00:00:00', 0, '小柴', 455621);
INSERT INTO `registration_records` VALUES (2, '成都市武侯区第一宠物医院', '谢馨宇', '2021-06-18 00:00:00', '4', '2021-06-18 00:00:00', 1, '小柴', 45520);

-- ----------------------------
-- Table structure for subscribe
-- ----------------------------
DROP TABLE IF EXISTS `subscribe`;
CREATE TABLE `subscribe`  (
  `attention_id` int(11) NOT NULL,
  `doctor_user_id` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `doctorname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `workyear` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `position` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sonsultation_number` int(11) NOT NULL,
  `score` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `follower_number` int(11) NOT NULL,
  `direction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `selfintruduce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` double(10, 2) NOT NULL,
  `isSub` tinyint(255) NOT NULL,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`attention_id`) USING BTREE
) ENGINE = MyISAM CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of subscribe
-- ----------------------------
INSERT INTO `subscribe` VALUES (1, '1', '张婷', '5', '骨科', '主任医师', 1254, '4.8', 1284, '宠物常见骨科病，骨折，骨质疏松等', '全国执业兽医师、成都小动物骨科协会会员，丰富的临床经验', 6.00, 0, '');

SET FOREIGN_KEY_CHECKS = 1;
