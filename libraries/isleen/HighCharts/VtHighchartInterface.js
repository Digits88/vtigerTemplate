(function(a){a.Chart.prototype.createCanvas=function(){var c=this.getSVG(),e=parseInt(c.match(/width="([0-9]+)"/)[1]),b=parseInt(c.match(/height="([0-9]+)"/)[1]),d=document.createElement("canvas");
d.setAttribute("width",e);
d.setAttribute("height",b);
if(d.getContext&&d.getContext("2d")){canvg(d,c);
var f=d.toDataURL("image/png");
return f;
}else{alert("Your browser doesn't support this feature, please use a modern browser");
return false;
}};
}(Highcharts));
(function(b){var a={colors:["#7cb5ec","#434348","#90ed7d","#f7a35c","#8085e9","#f15c80","#e4d354","#8d4653","#91e8e1","#ED1B42","#69BD44","#6A2D91","#42525D","#C88B11","#0A7CDA","#990099","#990033","#8C5B43","#FF9900","#00509D","#FF0099","#081833","#559E83","#FF6666","#712D8E","#DB4900","#4C1647","#547701","#242E8F","#574D29","#C3CB71","#CC0000","#004833","#008752","#5A5255","#F15B21","#1B85B8","#72243C","#EC4699","#999900","#F7BC19"]};
b.setOptions(a);
}(Highcharts));
var vtHighChartInterface=function(){this.renderPie=function(){var a=this;
var b={chart:{type:"pie",zoomType:"xy",options3d:{enabled:false,alpha:45,beta:0},backgroundColor:"white"},credits:{enabled:false},title:{text:null},tooltip:{pointFormat:"<b>({point.y}/{point.total} = {point.percentage:.1f}%)</b>"},plotOptions:{pie:{allowPointSelect:true,cursor:"pointer",depth:35,dataLabels:{enabled:true,format:"{point.name}",connectorPadding:0},showInLegend:true},series:{cursor:"pointer",point:{events:{}}}},series:[{type:"pie",name:this.data["title"],data:this.data["chartData"]}],legend:{verticalAlign:"bottom",y:10},exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(d){var c=this.createCanvas();
if(c){$(d.currentTarget).find("a.saveasimage").attr("href",c);
}},separator:false}]}}}};
if(this.options.links){b.series[0].url=this.options.links;
b.plotOptions.series.point.events.click=function(){var c=this.series.userOptions.url[this.x];
if(c){a.triggerClick({"url":c});
}};
}if(this.options.options3d===false){b.chart.options3d.enabled=false;
}this.element.highcharts(b);
};
this.renderFunnel=function(){var e=this;
var d=JSON.parse(this.data);
var a=[];
var b=[];
for(var c=0;
c<d.length;
c++){a.push([d[c][0],parseFloat(d[c][1])]);
b[d[c][0]]=(d[c][3]);
}var f={chart:{type:"funnel",marginRight:100,backgroundColor:"white"},credits:{enabled:false},title:{text:null,x:-50},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0;padding:0;"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:true,useHTML:true},plotOptions:{series:{dataLabels:{enabled:true,format:"<b>{point.name}</b> ({point.y:,.0f})",color:(Highcharts.theme&&Highcharts.theme.contrastTextColor)||"black",softConnector:true},neckWidth:"30%",neckHeight:"25%",events:{},cursor:"pointer"}},legend:{enabled:true,verticalAlign:"bottom",y:10},series:[{data:a,url:b}],exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(h){var g=this.createCanvas();
if(g){$(h.currentTarget).find("a.saveasimage").attr("href",g);
}},separator:false}]}}}};
if(b){f.plotOptions.series.events.click=function(g){var h=this.chart.series[0].options.url[g.point.name];
if(h){e.triggerClick({"url":h});
}};
}this.element.highcharts(f);
};
this.renderMultibar=function(){var f=this;
var c=this.data.data;
var g=this.data.ticks;
var e=this.data.labels;
var h=this.data.links;
var a=[];
for(var d=0;
d<e.length;
d++){var j={name:e[d],data:c[d]};
j.url=h[d];
a.push(j);
}var b={chart:{type:"column",zoomType:"xy",backgroundColor:"white"},credits:{enabled:false},title:{text:null},xAxis:{categories:g},yAxis:{min:0,stackLabels:{enabled:true,style:{fontWeight:"bold",color:(Highcharts.theme&&Highcharts.theme.textColor)||"gray"}},title:{text:null}},tooltip:{formatter:function(){return"<b>"+this.x+"</b><br/>"+this.series.name+": "+this.y+"<br/>"+"Total: "+this.point.stackTotal;
}},plotOptions:{column:{stacking:"normal",dataLabels:{enabled:true,color:(Highcharts.theme&&Highcharts.theme.dataLabelsColor)||"white",style:{textShadow:"0 0 3px black, 0 0 3px black"},formatter:function(){var i=this.y;
if(i<=0){return"";
}return i;
},crop:false,overflow:"none"}},series:{cursor:"pointer",events:{}}},series:a,legend:{verticalAlign:"bottom",y:10},exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(k){var i=this.createCanvas();
if(i){$(k.currentTarget).find("a.saveasimage").attr("href",i);
}},separator:false}]}}}};
b.plotOptions.series.events.click=function(i){var k=this.options.url[i.point.x];
if(k){f.triggerClick({"url":k});
}};
this.element.highcharts(b);
};
this.renderHorizontalbar=function(){var h=this;
var b={chart:{type:"bar",zoomType:"xy",backgroundColor:"white"},credits:{enabled:false},title:{text:null},xAxis:{categories:this.data["labels"],title:{text:null},labels:{rotation:-20,overflow:"justify"}},yAxis:{min:0,title:{text:null,align:"high"},labels:{overflow:"justify"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0;padding:0;"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:true,useHTML:true},plotOptions:{bar:{dataLabels:{enabled:true}},series:{cursor:"pointer",events:{},colorByPoint:true}},series:[],legend:{verticalAlign:"bottom",y:10},exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(j){var i=this.createCanvas();
if(i){$(j.currentTarget).find("a.saveasimage").attr("href",i);
}},separator:false}]}}}};
var a=this.data["chartData"];
var f=[];
for(var e=0;
e<a.length;
e++){var c=[];
for(var d=0;
d<a[e].length;
d++){c.push(parseFloat(a[e][d][0]));
}var g={};
g.name=this.data.data_labels[e];
g.data=c;
f.push(g);
}b.series=f;
if(this.options.links){b.plotOptions.series.events.click=function(i){var j=h.options.links[i.point.x];
if(j){h.triggerClick({"url":j});
}};
}this.element.highcharts(b);
};
this.renderLine=function(){var d=this;
var f={chart:{type:"line",zoomType:"xy",options3d:{enabled:false},backgroundColor:"white"},credits:{enabled:false},title:{text:this.data["graph_label"],x:-20},xAxis:{categories:this.data["labels"],labels:{rotation:-45}},yAxis:{title:{text:null},plotLines:[{value:0,width:1,color:"#808080"}]},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0;padding:0;"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:true,useHTML:true},legend:{verticalAlign:"bottom",y:10},plotOptions:{series:{cursor:"pointer",events:{}}},series:[],exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(h){var g=this.createCanvas();
if(g){$(h.currentTarget).find("a.saveasimage").attr("href",g);
}},separator:false}]}}}};
var b=[];
var e=this.data.chartData;
for(var a=0;
a<e.length;
a++){var c={};
c.name=this.data.data_labels[a];
c.data=e[a];
b.push(c);
}f.series=b;
if(this.options.links){f.plotOptions.series.events.click=function(g){var h=d.options.links[g.point.x];
if(h){d.triggerClick({"url":h});
}};
}this.element.highcharts(f);
};
this.renderbar=function(){var b=this;
var c={chart:{type:"column",zoomType:"xy",margin:75,options3d:{enabled:false,viewDistance:15,alpha:8,beta:8,depth:70},backgroundColor:"white"},credits:{enabled:false},title:{text:null},xAxis:{categories:this.data["labels"],labels:{rotation:-30}},yAxis:{min:0,max:this.data["yMaxValue"],title:{text:null}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0;padding:0;"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:true,useHTML:true},plotOptions:{column:{pointPadding:0.2,borderWidth:0,depth:25},series:{cursor:"pointer",point:{events:{}},colorByPoint:true}},series:[],legend:{verticalAlign:"bottom",y:10},exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(g){var f=this.createCanvas();
if(f){$(g.currentTarget).find("a.saveasimage").attr("href",f);
}},separator:false}]}}}};
var a=[{showInLegend:false,data:this.data["chartData"][0]}];
if(this.data.data_labels&&this.data.chartData.length>1){a=[];
for(var e=0;
e<this.data.data_labels.length;
e++){var d={};
d.name=this.data.data_labels[e];
d.data=this.data.chartData[e];
a.push(d);
}delete (c.xAxis.labels);
}c.series=a;
if(this.options.options3d===false){c.chart.options3d.enabled=false;
}if(this.options.links){c.plotOptions.series.point.events.click=function(){var f=b.options.links[this.x];
if(f){b.triggerClick({"url":f});
}};
}this.element.highcharts(c);
};
this.renderColumn=function(){var a={chart:{type:"column",backgroundColor:"white"},title:{text:null},credits:{enabled:false},xAxis:{categories:this.data["categories"]},yAxis:{min:0,title:{text:null}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td>'+'<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',footerFormat:"</table>",shared:true,useHTML:true},plotOptions:{column:{pointPadding:0.2,borderWidth:0}},series:this.data["chartData"],exporting:{buttons:{contextButton:{menuItems:[{text:"<a>"+app.vtranslate("JS_PRINT")+"</a>",onclick:function(){this.print();
}},{text:"<a class='saveasimage' href='' download='chart.png'>"+app.vtranslate("JS_SAVE_AS_IMAGE")+"</a>",onclick:function(c){var b=this.createCanvas();
if(b){$(c.currentTarget).find("a.saveasimage").attr("href",b);
}},separator:false}]}}}};
this.element.highcharts(a);
};
this.init=function(b,c,a){this.element=b;
this.data=c;
this.options=a;
switch(a.renderer){case"pie":this.renderPie();
break;
case"bar":this.renderbar();
break;
case"funnel":this.renderFunnel();
break;
case"multibar":this.renderMultibar();
break;
case"horizontalbar":this.renderHorizontalbar();
break;
case"linechart":this.renderLine();
break;
case"column":this.renderColumn();
break;
default:console.log("highchart renderer not supported");
}};
};