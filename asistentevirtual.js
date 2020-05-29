
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
            //console.log(voices);
        };
       
        function sendAnswer(message){
            const voiceIndex = 5;
            utter.text = message;
            utter.voice = voices[voiceIndex];
            window.speechSynthesis.speak(utter);
        }

        //Definimos los comandos a utilizar.
        var commands = {
            'Integrantes del grupo': function () {
               sendAnswer('Los integrantes del grupo son: Jose, Levin, Alejandro, Bigmar');
            },
            'Hola': function () {
                sendAnswer('Hola a Todos');
            },
            'Como estas': function () {
                sendAnswer('Excelente');
            },
            'Horarios': function () {
                sendAnswer('Luner a Viernes de 8 am a 5 pm y Sabados de 8 am a 1pm');
            },
            'Direccion': function () {
                sendAnswer('13 calle 21 guion 14 zona 10 guatemala');
            },

            'quiero buscar *valor': function(valor){
                window.open('https://www.google.com/searchsxsrf=ALeKk00joHDFFwin70L2y_UQRLB63REXpQ%3A1589984152130&source=hp&ei=mDvFXri2BYWw_Qago6iwDQ&q='+valor)
            },

            'facebook': function(){
                window.open('https://www.facebook.com')
            },
            'twitter': function(){
                window.open('https://www.twitter.com')
            },
            
            'cuando son los finales': function () {
                utter.text = 'empiezan el proximo miercoles';
                utter.voice = voices[0];
                window.speechSynthesis.speak(utter);
            },

            'eres un robot': function () {
                utter.text = 'No, tu lo eres?';
                utter.voice = voices[0];
                window.speechSynthesis.speak(utter);
            },
            
            'Cuando son los parciales': function () { sendAnswer('Cuando son los parciales');},
            'Cuanto se paga de inscripcion': function () { sendAnswer('Cuanto se paga de inscripcion');},
            'Cuanto se paga de mensualidad': function () { sendAnswer('Cuanto se paga de mensualidad');},
            'Cuando suben notas': function () { sendAnswer('Cuando suben notas');},
            'Habra descanso el dia despues del asueto que cae viernes, en este caso para nuestro centro que imparte clases sabado': function () { sendAnswer('Habra descanso el dia despues del asueto que cae viernes, en este caso para nuestro centro que imparte clases sabado');},
            'Porque no han publicado notas': function () { sendAnswer('Porque no han publicado notas');},
            'Que necesito para retirarme de la universidad': function () { sendAnswer('Que necesito para retirarme de la universidad');},
            'Que debo hacer para obtener una constancia cursos': function () { sendAnswer('Que debo hacer para obtener una constancia cursos');},
            'Que cursos puedo asignarme': function () { sendAnswer('Que cursos puedo asignarme');},
            'Que horarios tendran los cursos de x ciclo': function () { sendAnswer('Que horarios tendran los cursos de x ciclo');},
            'Quien impartira el curso o los cursos': function () { sendAnswer('Quien impartira el curso o los cursos');},
            'Cual es el procedimiento para solicitar revision de examen': function () { sendAnswer('Cual es el procedimiento para solicitar revision de examen');},
            'Que sucede sino estoy conforme con la nota obtenida en un examen': function () { sendAnswer('Que sucede sino estoy conforme con la nota obtenida en un examen');},
            'Necesito comunicarme con un docente me puede proporcionar el número de telefono': function () { sendAnswer('Necesito comunicarme con un docente me puede proporcionar el número de telefono');},
            'Como le entrego una tarea fisica al catedratico si ya se retiro del centro universitario': function () { sendAnswer('Como le entrego una tarea fisica al catedratico si ya se retiro del centro universitario');},
            'Si me tuve que ausentar el dia anterior de clase cual es el procedimiento para que no me lo tomen como inasistencia': function () { sendAnswer('Si me tuve que ausentar el dia anterior de clase cual es el procedimiento para que no me lo tomen como inasistencia');},
            'En la sede hay parqueo para alumnos': function () { sendAnswer('En la sede hay parqueo para alumnos');},
            'Que requisitos se necesitan para inscribirse': function () { sendAnswer('Que requisitos se necesitan para inscribirse');},
            'Cuales son las fechas de inscripcion': function () { sendAnswer('Cuales son las fechas de inscripcion');},
            'Cuando terminan las inscripciones': function () { sendAnswer('Cuando terminan las inscripciones');},
            'Que debo hacer si tuve 1 mes de inasistencia por enfermedad': function () { sendAnswer('Que debo hacer si tuve 1 mes de inasistencia por enfermedad');},
            'Que debo hacer si tuve 1 mes de inasistencia porque tuve que salir de viaje': function () { sendAnswer('Que debo hacer si tuve 1 mes de inasistencia porque tuve que salir de viaje');},
            'Cuales son los prerrequisitos para asignarme cursos': function () { sendAnswer('Cuales son los prerrequisitos para asignarme cursos');},
            'Puedo adelantar cursos de otros ciclos ': function () { sendAnswer('Puedo adelantar cursos de otros ciclos ');},
            'Que carreras se imparten en San Jose Pinula': function () { sendAnswer('Que carreras se imparten en San Jose Pinula');},
            'Me podrian entregar algún tipo de documento que haga constar los semestres que tengo aprobados': function () { sendAnswer('Me podrian entregar algún tipo de documento que haga constar los semestres que tengo aprobados');},
            'hoy que entre en el portal no me aparece ninguna de las clases que tengo asignadas y ayer que me conecte si estaban': function () { sendAnswer('hoy que entre en el portal no me aparece ninguna de las clases que tengo asignadas y ayer que me conecte si estaban');},
            'con una consulta fijese que por motivos de una actividad personal no podre asistir mañana a la u La pregunta es si una carta me ayuda para no perder mi asistencia': function () { sendAnswer('con una consulta fijese que por motivos de una actividad personal no podre asistir mañana a la u La pregunta es si una carta me ayuda para no perder mi asistencia');},
            'Cuando es q suben notas de recuperacion': function () { sendAnswer('Cuando es q suben notas de recuperacion');},
            'Se puede pagar examen extraordinario en linea': function () { sendAnswer('Se puede pagar examen extraordinario en linea');},
            'Ud. no cuenta con los horarios y los catedraticos de cada curso': function () { sendAnswer('Ud. no cuenta con los horarios y los catedraticos de cada curso');},
            'le comento que varios compañeros no han podido ingresar a cursos virtuales de la plataforma, quisiera saber para cuando estara habilitada la plataforma ': function () { sendAnswer('le comento que varios compañeros no han podido ingresar a cursos virtuales de la plataforma, quisiera saber para cuando estara habilitada la plataforma ');},
            'me podria brindar el link para asignaciones en linea': function () { sendAnswer('me podria brindar el link para asignaciones en linea');},
            'Queria asignarme los cursos de x ciclo, pero no me da curpo': function () { sendAnswer('Queria asignarme los cursos de x ciclo, pero no me da curpo');},
            'Si pague en linea la inscripcion y no me da cupo que debo hacer para asignarme': function () { sendAnswer('Si pague en linea la inscripcion y no me da cupo que debo hacer para asignarme');},
            'Que debo hacer si mis notas me aparecen con 0': function () { sendAnswer('Que debo hacer si mis notas me aparecen con 0');},
            'Cuando es de multa a cancelar': function () { sendAnswer('Cuando es de multa a cancelar');},
            'Al generar mi boleta de pago me aparecen solo 495, que debo hacer porque no me aparece la multa': function () { sendAnswer('Al generar mi boleta de pago me aparecen solo 495, que debo hacer porque no me aparece la multa');},
            '¡Tengo que ir personalmente a la oficina de Pinula para que me den un recibo para pago de multa!': function () { sendAnswer('¡Tengo que ir personalmente a la oficina de Pinula para que me den un recibo para pago de multa!');},
            'Cual es la direccion exacta de la sede': function () { sendAnswer('Cual es la direccion exacta de la sede');},
            'Me pueden extender una certificacion de que estoy estudiando': function () { sendAnswer('Me pueden extender una certificacion de que estoy estudiando');},
            'No me aparecen cursos para asignarme en linea que debo hacer': function () { sendAnswer('No me aparecen cursos para asignarme en linea que debo hacer');},
            'Para un examen extraordinario que no he podido pagar y el examen es mañana, puedo enviarsela al catedratico por correo': function () { sendAnswer('Para un examen extraordinario que no he podido pagar y el examen es mañana, puedo enviarsela al catedratico por correo');},
            'A que hora cierran las instalaciones de las oficinas de Pinula': function () { sendAnswer('A que hora cierran las instalaciones de las oficinas de Pinula');},
            'Las inscripciones en que horario son': function () { sendAnswer('Las inscripciones en que horario son');},
            'En que horario se realizaran los examenes de retrasada': function () { sendAnswer('En que horario se realizaran los examenes de retrasada');},
            'Es cierto que mañana solo habra clases hasta medio dia': function () { sendAnswer('Es cierto que mañana solo habra clases hasta medio dia');},
            'Podria llegar en estos dias a tomarme la foto para el carnet': function () { sendAnswer('Podria llegar en estos dias a tomarme la foto para el carnet');},
            'Cuando es el último dia para inscribirme': function () { sendAnswer('Cuando es el último dia para inscribirme');},
            'Me gustaria saber que necesito para continuar estudiando en la universidad este año ya que el año pasado no pude asistir por mi trabajo': function () { sendAnswer('Me gustaria saber que necesito para continuar estudiando en la universidad este año ya que el año pasado no pude asistir por mi trabajo');},
            'me retrasen en pago del mes ya cancele junto a la mora los mismos aún falta algún otro pago porque aún no aparecen notas o es la mora por cada evaluacion sometida': function () { sendAnswer('me retrasen en pago del mes ya cancele junto a la mora los mismos aún falta algún otro pago porque aún no aparecen notas o es la mora por cada evaluacion sometida');},
            'si no me tengo una multa pendiente entonces alguna forma para pagar en el banco o debo ir a la oficina para extender boleta': function () { sendAnswer('si no me tengo una multa pendiente entonces alguna forma para pagar en el banco o debo ir a la oficina para extender boleta');},
            'para poder hacer el examen de recuperacion de una clase cuanto debo pagar': function () { sendAnswer('para poder hacer el examen de recuperacion de una clase cuanto debo pagar');},
            'informacion sobre cursos de ingles Podemos llevar este semestre': function () { sendAnswer('informacion sobre cursos de ingles Podemos llevar este semestre');},
            'Una consulta no podre llegar este sabado a evaluaciones para asignarme a evaluaciones extras que debo hacer': function () { sendAnswer('Una consulta no podre llegar este sabado a evaluaciones para asignarme a evaluaciones extras que debo hacer');},
            'Como le va, por motivos de trabajo no podre llegar mañana que debo hacer para realizar examenes parciales la otra semana': function () { sendAnswer('Como le va, por motivos de trabajo no podre llegar mañana que debo hacer para realizar examenes parciales la otra semana');},
            'quiero asignarme cursos del 3er. Semestre solo deje la clase de Precalculo del segundo semestre, cuales cursos puedo seguir o asignarme para empezar otra vez': function () { sendAnswer('quiero asignarme cursos del 3er. Semestre solo deje la clase de Precalculo del segundo semestre, cuales cursos puedo seguir o asignarme para empezar otra vez');},
            'no pude asistir a los examenes del dia sabado ya que nacio mi hijo viernes por la noche y debia estar todo el dia sabado en el hospital. Puedo hacerme los examenes normales o debo pagar el extraordinario, solo es consulta adjunto constancia de lo mencionado anteriormente': function () { sendAnswer('no pude asistir a los examenes del dia sabado ya que nacio mi hijo viernes por la noche y debia estar todo el dia sabado en el hospital. Puedo hacerme los examenes normales o debo pagar el extraordinario, solo es consulta adjunto constancia de lo mencionado anteriormente');},
            'Debo un mes de Universidad me puedo examinar este sabado y pagar todo entre semana de la otra claro con la cuata de estos cursos que me examine ': function () { sendAnswer('Debo un mes de Universidad me puedo examinar este sabado y pagar todo entre semana de la otra claro con la cuata de estos cursos que me examine ');},
            'Tendran ahora jornada los domingos de Ingeniera en Sistemas en San Jose pinula para el proximo semestre': function () { sendAnswer('Tendran ahora jornada los domingos de Ingeniera en Sistemas en San Jose pinula para el proximo semestre');},
            'en mi trabajo me pasaron para laborar dias sabado entonces ya no podre seguir el semestre. consulto que debo hacer para dar a entender a la Universidad este tema o que me puede indicar hacer': function () { sendAnswer('en mi trabajo me pasaron para laborar dias sabado entonces ya no podre seguir el semestre. consulto que debo hacer para dar a entender a la Universidad este tema o que me puede indicar hacer');},
            'Seria tan amable de indicarme si la boleta para extraordinario, unicamente se puede ir a traer a la Universidad o la podemos solicitar por correo o en la plataforma': function () { sendAnswer('Seria tan amable de indicarme si la boleta para extraordinario, unicamente se puede ir a traer a la Universidad o la podemos solicitar por correo o en la plataforma');},
            'que hora atienden en la U para poder ir a traer boletas de extraordinario': function () { sendAnswer('que hora atienden en la U para poder ir a traer boletas de extraordinario');},
            'al momento de terminar el semestre y tener todos los cursos ganados ustedes proporcionan algun documento que indique que uno ya tiene un semestre de universidad': function () { sendAnswer('al momento de terminar el semestre y tener todos los cursos ganados ustedes proporcionan algun documento que indique que uno ya tiene un semestre de universidad');},
            'Cuales son los numeros de la oficina en Pinula': function () { sendAnswer('Cuales son los numeros de la oficina en Pinula');},
            'Para el traslado a otra sede que debo hacer': function () { sendAnswer('Para el traslado a otra sede que debo hacer');},
            'en este segundo semestre ira a haber algun sabado de descanso': function () { sendAnswer('n este segundo semestre ira a haber algun sabado de descanso');},
            'por motivos personales me atrase en el pago de mensualidad y es primera vez que me pasa entonces necesito saber que es lo que tengo que pagar aparte de la Mora de 25 por atraso tengo que pagar algo mas ': function () { sendAnswer('por motivos personales me atrase en el pago de mensualidad y es primera vez que me pasa entonces necesito saber que es lo que tengo que pagar aparte de la Mora de 25 por atraso tengo que pagar algo mas ');},
            'la mora como es cobrada es una cuota fija o sube por cada dia': function () { sendAnswer('la mora como es cobrada es una cuota fija o sube por cada dia');},
            'hasta que hora dejan de atender el las oficinas de la U en pinula.': function () { sendAnswer('hasta que hora dejan de atender el las oficinas de la U en pinula.');},
            'por motivo de una oportunidad laboral eh decidido dejar el semestre y dedicarme a trabajar mi consulta es cual es el proceso para poder hacerlo sin que se me cobre todo el semestre': function () { sendAnswer('por motivo de una oportunidad laboral eh decidido dejar el semestre y dedicarme a trabajar mi consulta es cual es el proceso para poder hacerlo sin que se me cobre todo el semestre');},
            'Si empiezan las clases del semestre y no me he inscrito puedo empezar a estudiar': function () { sendAnswer('Si empiezan las clases del semestre y no me he inscrito puedo empezar a estudiar');},
            'test' : function () { sendAnswer('Esto es una prueba');}
        };

        //Sumamos todos los comandos a annyang.
        annyang.addCommands(commands);
        
        //Configurar annyang en español
        annyang.addLanguage("es");

        //Annyang comienza a escuchar.
        annyang.start({ autoRestart: false, continuous: true });

    }
}
