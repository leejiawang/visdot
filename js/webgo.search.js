// search
var SearchData = {  

  "order": ["google", "baidu", "sogou", "360", "bing", "yandex"],        

    "google": [{ "c": "Google", "u": "http://www.google.com/search?q=##QUERY##" }],

    "baidu": [{ "c": "百度", "u": "http://www.baidu.com/s?cl=3&wd=##QUERY##" }],

    "sogou": [ { "c": "搜狗", "u": "http://www.sogou.com/web?query=##QUERY##" }],

    "360": [ { "c": "360搜索", "u": "https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=##QUERY##" }],

    "bing": [ { "c": "必应", "u": "https://cn.bing.com/search?q=##QUERY##" }],

    "yandex": [ { "c": "Yandex", "u": "https://yandex.com/search/?text=##QUERY##" }],
  };

window.SearchQuery = SearchData['google'][0].u;      

window.SearchQuery2 = '';      

window.categoryId = 0;

//设置搜索方式      
function setQ(query, who, color) {        
   var anchors = document.getElementById('eyecus-search-menu').getElementsByTagName('a');    
       for (var i = 0; i < anchors.length; i++) {          
                anchors[i].style.color = '';          
                if (anchors[i].innerHTML === who) {        
                      anchors[i].style.color = '' + color;};}

window.SearchQuery = query;          

document.getElementById('eyecus-search-cont').select();};

function changeSearch(id) {
     for (var i = 0; i < document.getElementsByName('radiobutton').length; i++) {
　　　document.getElementsByName('radiobutton')[i].checked = false};          

document.getElementsByName('radiobutton')[id].checked = true;
      var x = 'google';
  　　 x = window.SearchData["order"][parseInt(id)];
 　　  var lhtml = '';
 　　  for (var i = 0; i < SearchData[x].length; i++) {
      　　 lhtml += '<a href="javascript:setQ(\'' + SearchData[x][i].u + '\',\'' + SearchData[x][i].c + '\', \'#000\');" id="' + x + '_' + i + '">' + 　　　　　　SearchData[x][i].c + '</a>';
   　　  if (i < SearchData[x].length - 1) lhtml += ' | ';}          

document.getElementById('eyecus-search-menu').innerHTML = lhtml;
  setQ(SearchData[x][0].u, SearchData[x][0].c, '#000');  
  y = '/images/' + x + '.png';        
  document.getElementById('eyecus-search-menu').firstChild.setAttribute('src', y);};

function doSearch() {          
    window.SearchQuery2 = SearchQuery.replace('##QUERY##', document.getElementById('eyecus-search-cont').value);window.open(SearchQuery2);};

//设置网站搜索引擎      
function changeSearch2(name) {          
     var searchitems = [['google', '0'], ['baidu', '1'], ['sogou', '2'], ['360', '3'], ['bing', '4'], ['yandex', '5']];      
     for (var idx = 0; idx < searchitems.length; idx++) {
　　if (searchitems[idx][0] === name) { changeSearch(searchitems[idx][1]); return; }};    
       changeSearch('0');};

//加载执行函数      
function addOnloadEvent(fnc) {  

     if (window.addEventListener) {              
            window.addEventListener("load", fnc, false);          
     } else if (window.attachEvent) {        
       window.attachEvent("onload", fnc);  
      } else {          
        var oldOnload = window.onload || function() { };        
         window.onload = function(e) {            
            oldOnload(e);                
             window[fnc](e);};}}

addOnloadEvent(function() {          
//重新设置网站搜索引擎          
　　 changeSearch2(window.default_search);});

