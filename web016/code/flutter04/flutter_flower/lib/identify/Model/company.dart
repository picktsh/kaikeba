import 'dart:convert';
import 'package:flutter/material.dart';

class Company {
  final String logo;
  final String name;
  final String location;
  final String type;
  final String size;
  final String employee;
  final String hot;
  final String count;
  final String inc;

  //构造器
  Company({
    @required this.logo,
    @required this.name,
    @required this.location,
    @required this.type,
    @required this.size,
    @required this.employee,
    @required this.hot,
    @required this.count,
    @required this.inc
  });

  //json串转换成json格式数据
  static List<Company> fromJson(String json) {
    List<Company> listModel = new List<Company>();
    List list = jsonDecode(json)['list'];
    list.forEach((v){
      var model= Company.fromMap(v);
      listModel.add(model);
    });
    return listModel;
  }

  static Company fromMap(Map map) {
    return new Company(
        logo: map['logo'],
        name: map['name'],
        location: map['location'],
        type: map['type'],
        size: map['size'],
        employee: map['employee'],
        hot: map['hot'],
        count: map['count'],
        inc: map['inc']);
  }
}