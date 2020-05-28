
window.onload = function(){
    if(annyang){
        var voices;

        var utter = new SpeechSynthesisUtterance();
        utter.rate = 1;
        utter.pitch = 0.5;
        utter.lang = 'es-GT';

        //utilizamos las voces de windows
         window.speechSynthesis.onvoiceschanged = function (){
            voices = window.speechSynthesis.getVoices();
            console.log(voices);
        };

        //Definimos los comandos a utilizar.
        var commands = {
            'Hola': function () {
                utter.text = 'Hola a Todos';
                //Setea la voz que queremos usar en base a nuestra lista.
                utter.voice = voices[0];
                window.speechSynthesis.speak(utter);
            },
            'Como estas': function () {
                utter.text = 'Excelente';
                utter.voice = voices[0];
                window.speechSynthesis.speak(utter);
            },

            'Horarios': function () {
                utter.text = 'Luner a Viernes de 8 am a 5 pm y Sábados de 8 am a 1pm';
                utter.voice = voices[0];
                window.speechSynthesis.speak(utter);
            },
            'Direccion': function () {
                utter.text = '13 calle 21 guión 14 zona 10 guatemala';
                utter.voice = voices[0];
                window.speechSynthesis.speak(utter);
            },

            'quiero buscar *valor': function(valor){
                window.open('https://www.google.com/search?sxsrf=ALeKk00joHDFFwin70L2y_UQRLB63REXpQ%3A1589984152130&source=hp&ei=mDvFXri2BYWw_Qago6iwDQ&q='+valor)
            },

            'facebook': function(){
                window.open('https://www.facebook.com')
            },
            'twitter': function(){
                window.open('https://www.twitter.com')
            },

        };





        //Sumamos todos los comandos a annyang.
        annyang.addCommands(commands);

        //Annyang comienza a escuchar.
        annyang.start({ autoRestart: false, continuous: true });

    }
}