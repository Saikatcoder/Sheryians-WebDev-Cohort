function MirrorRightAngle(num){
    for (let i = 1; i <=num; i++) {
        for (let j =1; j <=num-i; j++) {
             process.stdout.write("_")
        }
        for (let k = 1; k<=i; k++) {
          process.stdout.write("*")
        }
       console.log();
    }
}

