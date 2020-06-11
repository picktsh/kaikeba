import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_flower/identify/Model/company.dart';

class CompanyItem extends StatelessWidget {
  
  final Company companyModel;

  CompanyItem(this.companyModel);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.symmetric(
        horizontal: 5,
        vertical: 3 
      ),
      child: Card(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Padding(
                  padding: EdgeInsets.only(
                    top: 10.0,
                    left: 15.0,
                    right: 15.0,
                    bottom: 0
                  ),
                  child: Image.network(
                    companyModel.logo,
                    width: 50,
                    height: 50,
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(
                    top: 5.0,
                    left: 0.0,
                    right: 5.0,
                    bottom: 5
                  ),
                  child: Text(
                    companyModel.location.substring(
                        0, companyModel.location.length > 6 ? 6 : companyModel.location.length),
                    style: TextStyle(fontSize: 13.0, color: Colors.grey),
                    textAlign: TextAlign.center,
                  ),
                ),
                Padding(
                  padding: EdgeInsets.only(
                    top: 5.0,
                    left: 5.0,
                    right: 10.0,
                    bottom: 5
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: [
                      Text(
                        "|"+companyModel.type,
                        style: TextStyle(fontSize: 13.0, color: Colors.grey),
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.center,
                      ),
                      Text(
                        "|" + companyModel.size,
                        style: TextStyle(fontSize: 13.0, color: Colors.grey),
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.center,
                      ),
                      Text(
                        "|" + companyModel.employee,
                        style: TextStyle(fontSize: 13.0, color: Colors.grey),
                        overflow: TextOverflow.ellipsis,
                        textAlign: TextAlign.center,
                      )
                    ], 
                  ),
                )
              ],
            ),
            Divider(),
            Row(
              children: [
                Padding(padding: EdgeInsets.only(
                  top: 5.0,
                  left: 10.0,
                  right: 5.0,
                  bottom: 15.0,
                ),
                  child: new Text(
                      "热招：" +
                          companyModel.hot +
                          " 等" +
                          companyModel.count +
                          "个职位",
                      style:
                      new TextStyle(fontSize: 13.0, color: Colors.grey)),
                ),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.end,
                    children: [
                      Padding(
                        padding: EdgeInsets.only(
                          bottom: 8 ,
                        ),
                        child: Icon(Icons.keyboard_arrow_right, color:Colors.grey),
                      )
                    ], 
                  )
                )
              ], 
            )
          ], 
        ), 
      ),
    );
  }
}