import 'dart:convert';

import 'package:flutter/material.dart';

class Friend {
  @required
  final String avatar;
  @required
  final String name;
  @required
  final String email;

  // 构造函数
  Friend({this.avatar, this.name, this.email});

  static List<Friend> resolveDataFromReponse(String responseData) {
    var json = jsonDecode(responseData);
  }
}
