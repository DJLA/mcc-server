package main

import(
    "fmt"
     "time"
    "encoding/json"
    "io"
    "os"
     vegeta "github.com/tsenart/vegeta/lib"    
)

func main(){

    metrics := makeRequests("http://plant-api-abdi07.c9users.io/plants","GET")

    file,err := os.Create("./tmp/metrics.json")

    
    if err!= nil {
        fmt.Println(err)
    }
    
    n,err := io.WriteString(file,metrics)
    
    if err!=nil {
        fmt.Println(n,err)
    }

    file.Close();
    
    fmt.Println(metrics)    
}

func makeRequests(url , method string) string{
    rate := uint64(100)
    duration := 4 * time.Second
    targeter := vegeta.NewStaticTargeter(vegeta.Target{
        Method:method,
        URL:url,
        Body:[]byte("Body"),
    })
    
    attacker := vegeta.NewAttacker()
    
    var metrics vegeta.Metrics
    
    for res := range attacker.Attack(targeter,rate,duration){
        metrics.Add(res)
    }
    
    metrics.Close()
    
    
    mapD := map[string]vegeta.Metrics{"data":metrics}
    mapB, _ := json.MarshalIndent(mapD,"","\t")    
    
    return string(mapB)
}