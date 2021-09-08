<template>
  <div class="prensa-grid">
    <div class="comunicado" v-for="(item, index) in temp" :key="index">
      <h2>{{item.title}}</h2>
      <p>{{item.fecha}} <span>Comunicado</span> </p>
      <p>{{item.subtitle}} </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: [
        {
          image: 'https://www.gob.mx/cms/uploads/article/main_image/112823/highlight_LuciaParadaAguilar.jpg',
          title: 'Inicia operativo de pago septiembre octubre de pensiones Bienestar',
          subtitle: 'Comunicado 064.- Más de 8 millones de personas adultas mayores y un millón de niñas y niños con discapacidad ejercerán su derecho a una pensión.',
          content: `El Gobierno de México, a través de la Secretaría de Bienestar, dio inicio al pago de las pensiones para personas adultas mayores y personas con discapacidad permanente en todo el país con el fin de cubrir el bimestre septiembre-octubre de este año.
            Para quienes cobran con tarjeta bancaria, desde el 1° de septiembre ya se realizó la dispersión de ambas pensiones Bienestar. Este depósito se puede identificar en su estado de cuenta como: PENSIÓN BIENESTAR SEPTIEMBRE-OCTUBRE.
            Para quienes reciben el recurso en efectivo, los operativos de pago se llevan a cabo desde el día 3 y hasta el 30 de septiembre en los más de 10 mil puntos distribuidos en todo el país.  
            El equipo de la Secretaría de Bienestar cuenta con apoyo del personal del Banco del Bienestar y de Telecomm, así como de la Guardia Nacional, para salvaguardar la integridad de las personas asistentes.
            Es muy importante que, al acudir a cobrar su pensión, las personas atiendan las recomendaciones de salud y respeten fecha y hora de su cita, las cuales les serán informadas en cada una de sus comunidades por personal de Bienestar, con el fin de que se pueda realizar una entrega segura, ordenada y dosificada.
            De esta manera, durante septiembre, más de ocho millones de personas adultas mayores podrán contar con sus pagos. Para ello se invirtieron en este bimestre más de 25 mil 461 millones de pesos.
            En tanto, un millón de niñas y niños con discapacidad permanente reciben bimestralmente 2 mil 700 pesos, lo que representa una inversión social de casi dos mil 540 millones de pesos.
            Para mayor información o dudas al respecto, la población puede llamar sin costo a la Línea de Bienestar: 800-639-42-64.`,
          fecha: '04 de septiembre de 2021',
          // imageAlt: null,
          // categoria: null,
          // autor: null
        },
        {
          image: 'https://www.gob.mx/cms/uploads/press/main_image/213858/post_WhatsApp_Image_2021-09-03_at_2.49.58_PM.jpeg',
          title: 'En Ciudad de México se amplía hasta el 12 de septiembre registro a pensión para adultos mayores',
          subtitle: 'Comunicado 063.- Para dudas o mayor información, las y los interesados pueden llamar a la Línea de Bienestar 800 MEXICO 4 marcando al 800-639-42-64 o visitar el portal https://ubicatumodulo.bienestar.gob.mx/index para localizar el módulo que corresponde.',
          content: `La Secretaría de Bienestar informa que se extiende hasta el 12 de septiembre el periodo de registro de personas mayores de 65 años de la Ciudad de México a la Pensión para el Bienestar de las Personas Adultas Mayores.
            Por ello, los módulos ubicados en los distintos puntos de la ciudad seguirán atendiendo de lunes a sábado de 9:00 am a 4:00 pm. Para brindar la mejor atención y que puedan ejercer su derecho constitucional, es importante que presenten la documentación completa, consistente en:
            Identificación oficial (credencial de elector, pasaporte, cartilla, cédula profesional, credencial del Inapam o carta de identidad).
            CURP.
            Acta de nacimiento legible.
            Comprobante de domicilio no mayor a seis meses (teléfono, luz, gas, agua o predial).
            Teléfono de contacto para dar seguimiento al trámite.
            Para dudas o mayor información, las y los interesados pueden llamar a la Línea de Bienestar 800 MEXICO 4 marcando al 800-639-42-64 o visitar el portal https://ubicatumodulo.bienestar.gob.mx/index para localizar el módulo que corresponde.
            Asimismo, se invita a quienes conozcan o vivan con una persona adulta mayor, auxiliarles con el aviso o con apoyo para que acudan a los módulos a realizar su trámite.`,
          fecha: '03 de septiembre de 2021',
          // categoria: null,
          // autor: ull
        },
        {
          image: 'https://www.gob.mx/cms/uploads/press/main_image/213465/post_IMG-20210828-WA0018.jpg',
          title: 'Ha registrado Bienestar 730 mil mayores de 65 años para pensión: Ariadna Montiel',
          subtitle: 'Comunicado 062.- Trabajar por su bienestar, la mejor manera de celebrar el Día Nacional de las Personas Mayores, afirma ante el presidente Andrés Manuel López Obrador.',
          content: `Ratifica aumento anual de 20% en pensión de adultos mayores de aquí a 2024.
            En Chiapas, más de 350 mil personas beneficiadas con pensión; inversión bimestral de mil 128 millones de pesos.
            La mejor manera de celebrar el Día Nacional de las Personas Mayores es trabajar por su bienestar, afirmó hoy la subsecretaria Ariadna Montiel Reyes al informar al presidente Andrés Manuel López Obrador, de la inscripción, hasta ahora, de 730 mil nuevas personas derechohabientes de la Pensión para el Bienestar en los seis mil 500 módulos de registro instalados en todo el país.
            Durante la evaluación de los Programas de Bienestar en Chiapas, donde estuvieron presentes el gobernador Rutilio Escandón Cadenas y el secretario de Bienestar, Javier May Rodríguez, la subsecretaria recordó que el registro de nuevos derechohabientes de la Pensión para el Bienestar de las Personas Adultas Mayores inició el 4 de agosto y se realiza en cinco etapas con prioridad en municipios y comunidades más pobres del país. 
            Tras ratificar que de aquí a 2024 la pensión aumentará un 20 por ciento anual, con lo que las y los adultos mayores recibirán ese año el doble de lo que recibían en marzo de 2021 y cinco veces más de lo que recibían el régimen pasado, destacó que, en julio, ocho millones de derechohabientes recibieron su primer aumento a tres mil 100 pesos bimestrales.
            “Continuaremos con este plan hasta alcanzar a incorporar a dos millones 200 mil nuevos beneficiarios y, en suma, más de 10 millones 200 mil adultos mayores gozarán esta pensión”, instaurada –recordó- hace 20 años por el presidente López Obrador, durante su gestión como jefe de Gobierno de la ahora Ciudad de México.
            Expresó que, entonces, hubo quienes se opusieron “aduciendo que no era correcto regalar el dinero de los impuestos de otros, los mismos que establecieron el régimen de corrupción, que privilegiaron la acumulación de la riqueza en unos cuantos a costa de la pobreza y el abandono de otros, y los mismos que, cuando se presentó la iniciativa para hacer un derecho esta pensión, se volvieron a oponer”. 
            La servidora pública federal subrayó que, en cumplimiento de uno de sus principales compromisos, el Gobierno de México duplicó el monto de la pensión desde el 1° de enero de 2019 y actualmente ocho millones de personas adultas mayores reciben casi tres veces lo que se les entregaba el régimen anterior, además de que ahora se incluye también a pensionados y jubilados, porque se convirtió en un programa universal.
            Reafirmó que, a iniciativa del Ejecutivo federal, desde mayo de 2020 la pensión es un derecho constitucional que, como parte de un plan especial anunciado por el presidente López Obrador, beneficia ahora a la población en general a partir de los 65 años, edad que inicialmente aplicaba sólo para los pueblos originarios.
            Montiel Reyes señaló que, en Chiapas, 297 mil 835 personas adultas mayores y 58 mil 523 personas con discapacidad, es decir, más de 350 mil familias chiapanecas, reciben su Pensión para el Bienestar con presupuesto bimestral de mil 128 millones de pesos. 
            “Aquí en Motozintla, cinco mil 342 habitantes son beneficiarios de la política de bienestar y de ellos, 4 mil 209 son adultos mayores; mil 106 personas con discapacidad y 27 madres trabajadoras. En conjunto, en este municipio se invierten cada dos meses 16.5 millones de pesos.”
            También acompañaron al presidente: el subsecretario de Inclusión Productiva y Desarrollo Rural, Hugo Raúl Paulín Hernández; el secretario técnico del Gabinete de la Presidencia, Carlos Torres Rosas; y el subsecretario de Empleo y Productividad Laboral de la Secretaría del Trabajo y Previsión Social (STPS), Marath Baruch Bolaños López.
            Además, el coordinador nacional del programa de Becas para el Bienestar “Benito Juárez” de la SEP, Abraham Vázquez Piceno; la directora general del programa La Escuela es Nuestra, Pamela López Ruiz, y el presidente municipal interino de Motozintla, Jorge Eduardo Velázquez Robledo. `,
          fecha: '28 de agosto de 2021',
          // categoria: null,
          // autor: ull
        },
        {
          image: 'https://www.gob.mx/cms/uploads/press/main_image/213464/post_1.jpeg',
          title: 'Con Sembrando Vida, nuevas raíces para una sociedad más justa, fraterna, productiva y ambiental: Javier May',
          subtitle: 'Comunicado 061.- Ahora nadie está solo porque, a diferencia del individualismo neoliberal, hay lazos de fraternidad, afirma ante el presidente Andrés Manuel López Obrador.',
          content: `En 20 estados, Sembrando Vida integra a más de 400 mil sembradoras y sembradores que plantan mil millones de árboles en un millón de hectáreas.
            En Chiapas, el programa destinó de enero a junio, más de 2 mil mdp al pago de sembradoras y sembradores.
            Además de contribuir al cuidado colectivo del medio ambiente y apoyar la economía social y familiar, el programa Sembrando Vida ha sido fundamental para fortalecer la vida comunitaria, frenar la migración y devolver el arraigo a la tierra, afirmó hoy en Chiapas ante el presidente Andrés Manuel López Obrador, el secretario de Bienestar, Javier May Rodríguez.
            “En Sembrando Vida, las campesinas y campesinos fortalecen su sentido comunitario y contribuyen de manera colectiva al cuidado del medio ambiente, es decir, cada quien tiene que trabajar su propia parcela, pero nadie está solo porque, a diferencia del individualismo neoliberal, en este programa se promueven lazos de fraternidad”, dijo.
            En una evaluación de los Programas de Bienestar a la asistió el gobernador, Rutilio Escandón Cadenas, en el municipio de Motozintla, May Rodríguez expuso los avances de Sembrando Vida, con presencia en 20 estados donde “420 mil sembradoras y sembradores, en promedio, participan en la siembra de mil millones de árboles en un millón de hectáreas”.
            “La experiencia de Sembrando Vida muestra que, donde antes había comunidades aisladas y egoísmos personales, ahora hay convivencia productiva, reconocimiento al trabajo del otro y, sobre todo, mucha ayuda para que nadie se quede atrás. Desde el corazón de nuestra tierra, Sembrando Vida está echando nuevas raíces para una nueva sociedad más justa, más fraterna, más productiva y más ambiental”, expresó.
            Subrayó que con un presupuesto este año de prácticamente 29 mil millones de pesos, con el que se garantiza su desarrollo, Sembrando Vida cuenta con 17 mil Comunidades de Aprendizaje Campesino (CAC) y 13 mil 676 viveros comunitarios, así como con casi 36 mil becarias y becarios del programa Jóvenes Construyendo el Futuro.
            Especificó que, en Chiapas, Sembrando Vida tiene 80 mil sembradoras y sembradores, 30 por ciento mujeres y 70 por ciento hombres, a quienes de enero a junio pagó dos mil 817 millones de pesos por el trabajo en sus propias parcelas.
            “El programa llega a tres mil 298 localidades chiapanecas, donde se siembran casi 200 mil hectáreas y donde, con el apoyo de tres mil 301 Comunidades de Aprendizaje Campesino, las sembradoras y sembradores chiapanecos aprenden a sembrar sin usar químicos y deciden libremente el uso de sus recursos”, destacó.
            En cuanto al municipio de Motozintla, informó que el programa cuenta con mil 875 sembradoras y sembradores que trabajan en 76 CAC’s y 48 viveros comunitarios y quienes, de enero a julio de este año, recibieron pagos mensuales por más de 56 millones de pesos por la siembra de cuatro mil 687 hectáreas.
            May Rodríguez también hizo énfasis en los resultados de la Segunda Jornada Nacional de Siembra, “Desde el corazón de nuestra tierra”, que comenzó en junio último y en la que se plantarán 429 millones de nuevos árboles de los cuales, más de 84 millones se sembrarán en Chiapas donde se lleva un avance de 37. 5 por ciento.
            Señaló que las principales especies que se siembran en el estado son maderables como caoba, cedro, roble, guanacastle, primavera y ciricote, así como frutales, entre los que destacan cacao, aguacate, pera, manzana, durazno y mamey, además de especies agroforestales como café, cacao, achiote, canela y pimienta.
            Indicó que, como parte de la Jornada Nacional de Siembra, en Motozintla se plantarán tres millones 485 mil nuevos árboles, “una meta que prácticamente ya se cumplió porque la siembra registra un avance de 99 por ciento”, y por lo cual felicitó a las y los sembradoras del municipio a quienes se refirió como “un orgullo y ejemplo para todo el país”.
            Al inicio del evento, doña Aureliana Reynoso Méndez, sembradora del CAC “El Sabanino”, del ejido Motozintla, dio la bienvenida al presidente López Obrador y dio una explicación acerca de la producción obtenida a partir del programa Sembrando Vida.
            También acompañaron al presidente López Obrador: la subsecretaria de Bienestar, Ariadna Montiel Reyes; el subsecretario de Inclusión Productiva y Desarrollo Rural, Hugo Raúl Paulín Hernández; el secretario técnico del Gabinete de la Presidencia, Carlos Torres Rosas, y el subsecretario de Empleo y Productividad Laboral, Marath Baruch Bolaños López.
            Asimismo, el coordinador nacional del programa de Becas para el Bienestar “Benito Juárez” de la SEP, Abraham Vázquez Piceno; la directora general del programa La Escuela es Nuestra, Pamela López Ruiz, y el presidente municipal interino de Motozintla, Jorge Eduardo Velázquez Roblero. `,
          fecha: '28 de agosto de 2021',
          // categoria: null,
          // autor: ull
        },
        {
          image: 'https://www.gob.mx/cms/uploads/press/main_image/213427/post_WebComunicado060.jpg',
          title: 'Suma Bienestar municipios de Puebla e Hidalgo a censo de daños por huracán Grace',
          subtitle: 'Comunicado 060.- Serán censados 69 municipios de Puebla y 44 de Hidalgo, además de 28 en Veracruz, en coordinación con gobiernos estatales y municipales.',
          content: `Trabajar de manera coordinada, sin burocratismo y con transparencia en apoyo a damnificados, la instrucción presidencial.
            En Veracruz ya son más de 200 las localidades censadas como parte del Plan de Apoyo a Personas Afectadas por el Huracán Grace en Veracruz.   
            La Secretaría de Bienestar inicia mañana el censo en 69 municipios de Puebla y 44 de Hidalgo para identificar, en coordinación con gobiernos estatales y municipales, las afectaciones causadas por el huracán Grace, tal como instruyó el presidente Andrés Manuel López Obrador.
            En Veracruz, el censo inició este jueves 26 y en dos días de trabajo visitó más de 200 localidades de los 28 municipios más afectados por el huracán, entre ellos: Álamo, Temapache, Castillo de Teayo, Cazones de Herrera, Chicontepec, Chumatlán, Coahuitlán, Coatzintla, Coxquihui, Coyutla, Espinal y Filomeno Mata.
            En seguimiento a la instrucción presidencial de trabajar coordinadamente, sin burocratismo y con transparencia, para acelerar el apoyo a la población afectada, el secretario de Bienestar, Javier May Rodríguez, estableció mecanismos de coordinación con los gobiernos de Veracruz, Puebla e Hidalgo, y sus respectivas autoridades municipales.
            Coincidieron en realizar en el menor tiempo posible el censo previsto en el Plan de Apoyo a Personas Afectadas por el Huracán Grace en Veracruz, extendido a las zonas afectadas por el fenómeno meteorológico en Puebla e Hidalgo.
            Acompañado por la subsecretaria Ariadna Montiel Reyes y titulares de las delegaciones federales en estas entidades, el servidor público federal sostuvo también reuniones de organización con servidores de la nación, técnicos del programa Sembrando Vida y personas becarias del programa Jóvenes Construyendo el Futuro.
            En las tres entidades serán censados, en total, 141 municipios donde la población damnificada será atendida como se hizo en su momento con la población afectada por las inundaciones del año pasado en Tabasco.  
            Para que jefas y jefes de familia tengan la oportunidad de preparar sus documentos y estar presentes cuando se levante el censo, la Secretaría de Bienestar puso a disposición el sitio https://www.gob.mx/bienestar/apoyoveracruz donde la población puede consultar de manera previa, municipio por municipio, las localidades que se censan cada día.`,
          fecha: '27 de agosto de 2021',
          // categoria: null,
          // autor: ull
        },
        {
          image: 'https://www.gob.mx/cms/uploads/press/main_image/213295/post_ImgWebApoyoVer.jpg',
          title: 'Abre Bienestar sitio para consultar censo a población afectada por Grace, en Veracruz',
          subtitle: 'Comunicado 059.- En https://www.gob.mx/bienestar/apoyoveracruz es posible consultar cada día las localidades que serán censadas para estar presentes en sus viviendas.',
          content: `Servidoras y servidores de la nación debidamente identificados iniciaron hoy censo en 132 localidades de 22 municipios
            Con el fin de que las familias estén presentes en sus viviendas y el censo avance con agilidad, la Secretaría de Bienestar pone a disposición el sitio https://www.gob.mx/bienestar/apoyoveracruz donde es posible consultar, municipio por municipio, las localidades que se censan cada día dentro del Plan de Apoyo a Personas Afectadas por el Huracán Grace en Veracruz.
            La dependencia del gobierno federal comenzó hoy el censo en las primeras 132 localidades de 22 municipios – de las 3 mil 221 que visitarán en 28 municipios- en cumplimiento de la instrucción presidencial y en coordinación con el gobierno del estado y autoridades municipales.
            Con total transparencia, servidoras y servidores de la nación, debidamente identificados, recorren municipios y entrevistan a jefas y jefes de familia, con el apoyo también de integrantes del programa Sembrando Vida que en el estado alcanza 30 mil sembradoras y sembradores.
            El censo identificará las afectaciones causadas por el huracán Grace en los municipios con daños más severos de los cuales hoy se visitan: Álamo Temapache, Castillo de Teayo, Cazones de Herrera, Chicontepec, Chumatlán, Coahuitlán, Coatzintla, Coxquihui, Coyutla, Espinal y Filomeno Mata.
            Asimismo, Gutiérrez Zamora, Huayacocotla, Ixhuatlán de Madero, Mecatlán, Papantla, Poza Rica de Hidalgo, San Rafael, Tecolutla, Tlachichilco, Tuxpan y  Zozocolco de Hidalgo.
            A diferencia de antes, cuando las emergencias generadas por fenómenos naturales eran utilizadas para el saqueo de recursos económicos y en especie que se enviaban a la población afectada, el Gobierno de México apoya ahora a la población de manera integral, directa e inmediata y con el presupuesto que se requiera.
            Posteriormente, el censo se extenderá a las zonas afectadas por el huracán Grace en los estados de Puebla e Hidalgo.`,
          fecha: '26 de agosto de 2021',
          // categoria: null,
          // autor: ull
        },

      ]
    }
  },
}
</script>

<style scoped>

  * {
    text-align: start;
  }

  h2 {
    font-size: 17px;
    font-weight: 700;
  }

  .prensa-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }

</style>