function onLoadPage(){
              $html = "";
        $url  = "http://www.jagranjosh.com/rss/josh/Articles/bank-exam-guide.xml";
        $xml  = simplexml_load_file($url);
         
         for ($i=0; $i<10; $i++){
             $title = $xml->channel->item[$i]->title;
             $description = $xml->channel->item[$i]->description;
             $pubDate = $xml->channel->item[$i]->pubDate;
             $html .= "<div><h3>$title</h3>$pubDate<br/> $description</div>";
             
         }
         
         echo $html;

}

onLoadPage();