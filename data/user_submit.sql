
//用户登录和注册

drop database cjg;
CREATE DATABASE cjg CHARSET=UTF8;
use cjg;
CREATE TABLE my_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(20) NOT NULL DEFAULT '',
	upwd VARCHAR(50)

); 
INSERT INTO my_user VALUES(null,'陈健光','123456');

INSERT INTO my_user VALUES(null,'cjg','123456');

//搜索框模糊查询
CREATE TABLE usearch(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	ukw VARCHAR(20) NOT NULL DEFAULT ''
	
); 
INSERT INTO usearch VALUES(null,'红玫瑰');
INSERT INTO usearch VALUES(null,'白玫瑰');
INSERT INTO usearch VALUES(null,'粉色玫瑰');
INSERT INTO usearch VALUES(null,'爱之玫瑰');
INSERT INTO usearch VALUES(null,'最受欢迎的玫瑰花');
INSERT INTO usearch VALUES(null,'送女朋友');
INSERT INTO usearch VALUES(null,'送男票');
INSERT INTO usearch VALUES(null,'送老人');
INSERT INTO usearch VALUES(null,'送老师');
INSERT INTO usearch VALUES(null,'送长辈');
INSERT INTO usearch VALUES(null,'玫瑰城');
INSERT INTO usearch VALUES(null,'销量最好的');
INSERT INTO usearch VALUES(null,'红色浪漫');
INSERT INTO usearch VALUES(null,'最新玫瑰鲜花');
INSERT INTO usearch VALUES(null,'粉红色回忆');
INSERT INTO usearch VALUES(null,'经典鲜花');
INSERT INTO usearch VALUES(null,'最受欢迎的玫瑰花');
INSERT INTO usearch VALUES(null,'送病人');
INSERT INTO usearch VALUES(null,'送领导');
INSERT INTO usearch VALUES(null,'送老婆');
INSERT INTO usearch VALUES(null,'送父母');
INSERT INTO usearch VALUES(null,'送知己');
INSERT INTO usearch VALUES(null,'主流');
  
//限时特价

CREATE TABLE xstj(
 id   INT PRIMARY KEY AUTO_INCREMENT,
 pname VARCHAR(100),
 price DOUBLE(10,2),
 pic   VARCHAR(100)
   
);
INSERT INTO xstj VALUES
(1,'爱的独白',188,'Images/62597-c1.jpg'),
(2,'真爱永恒',168,'Images/62597-c2.jpg'),
(3,'炽热的爱',188,'Images/62597-c3.jpg'),
(4,'手折玫瑰',158,'Images/62597-c4.jpg'),
(5,'真爱一世',158,'Images/62597-c5.jpg'),
(6,'相亲相爱',166,'Images/62597-c6.jpg'),
(7,'相恋爱人',158,'Images/62597-c7.jpg'),
(8,'邂逅缘分',198,'Images/62597-c8.jpg'),
(9,'不可一求',138,'Images/62597-c9.jpg'),
(10,'恋恋不舍',136,'Images/62597-c10.jpg'),
(11,'炙热的爱',178,'Images/62597-c11.jpg'),
(12,'爱的独白',198,'Images/62597-c12.jpg');

//第三,第四部分图片
CREATE TABLE rotation(
 id   INT PRIMARY KEY AUTO_INCREMENT,
 pname VARCHAR(100),
 price DOUBLE(10,2),
 pic   VARCHAR(100)
   
);
INSERT INTO rotation VALUES
(1,'爱的独白',188,'Images/index1.jpg'),
(2,'真爱永恒',168,'Images/index2.jpg'),
(3,'炽热的爱',188,'Images/index3.jpg'),
(4,'手折玫瑰',158,'Images/index4.jpg'),
(5,'真爱一世',158,'Images/index5.jpg');


///商品详情页网友实拍动态加载

CREATE TABLE shipai(
 id   INT PRIMARY KEY AUTO_INCREMENT,
 pic   VARCHAR(100) 
);
INSERT INTO shipai VALUES
(1,'Images/photo1.jpg'),
(2,'Images/photo2.jpg'),
(3,'Images/photo3.jpg'),
(4,'Images/photo4.jpg'),
(5,'Images/photo5.jpg'),
(6,'Images/photo6.jpg'),
(7,'Images/photo7.jpg'),
(8,'Images/photo8.jpg'),
(9,'Images/photo9.jpg'),
(10,'Images/photo10.jpg'),
(11,'Images/photo11.jpg'),
(12,'Images/photo12.jpg'),
(13,'Images/photo13.jpg'),
(14,'Images/photo14.jpg'),
(15,'Images/photo15.jpg'),
(16,'Images/photo16.jpg'),
(17,'Images/photo17.jpg'),
(18,'Images/photo18.jpg'),
(19,'Images/photo19.jpg'),
(20,'Images/photo20.jpg'),
(21,'Images/photo21.jpg'),
(22,'Images/photo22.jpg'),
(23,'Images/photo23.jpg'),
(24,'Images/photo24.jpg'),
(25,'Images/photo25.jpg'),
(26,'Images/photo26.jpg'),
(27,'Images/photo27.jpg'),
(28,'Images/photo28.jpg'),
(29,'Images/photo29.jpg'),
(30,'Images/photo30.jpg'),
(31,'Images/photo31.jpg'),
(32,'Images/photo32.jpg'),
(33,'Images/photo33.jpg'),
(34,'Images/photo34.jpg'),
(35,'Images/photo35.jpg'),
(36,'Images/photo36.jpg'),
(37,'Images/photo37.jpg'),
(38,'Images/photo38.jpg'),
(39,'Images/photo39.jpg'),
(40,'Images/photo40.jpg'),
(41,'Images/photo41.jpg'),
(42,'Images/photo42.jpg'),
(43,'Images/photo43.jpg'),
(44,'Images/photo44.jpg'),
(45,'Images/photo45.jpg');
