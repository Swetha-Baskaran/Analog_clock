function cut() {
            let day = new Date();
            let hour = day.getHours();
            let min = day.getMinutes();
            let sec = day.getSeconds();

            Tsec.style.transform = `rotate(${sec*6}deg)`;
            Tmin.style.transform = `rotate(${min*6}deg)`;
            Thour.style.transform = `rotate(${hour*30 + min/12}deg)`;

        }


        let Thour = document.querySelector(".hour");
        let Tmin = document.querySelector(".min");
        let Tsec = document.querySelector(".sec");
        cut();
        setInterval(cut, 1000);


        let clock = document.querySelector(".clock");
        var test = true;

        clock.onclick = change;

        function change() {
            if (test == true) {
                document.querySelector("body").style.background = "white";
                document.querySelector(".mn").style.background = "black";
                clock.classList.add("active");
                test = false;

            } else {
                document.querySelector("body").style.background = "#02121c";
                document.querySelector(".mn").style.background = "white";
                clock.classList.remove("active");
                test = true;
            }

        }
