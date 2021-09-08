<template>
  <div class="historias">

    <div class="historia__main">
      <div class="historia__main-img">
        <img :src="temp[0].image" alt="imagen">
      </div>
      <div class="historia__main-content">
        <p>{{temp[0].fecha}}</p>
        <h3>{{temp[0].title}}</h3>
        <p>{{temp[0].subtitle}}</p>
        <p>Continuar leyendo</p>
      </div>
    </div>

    <div class="historia__below">
      <div v-for="(item, index) in 3" :key="index">
        <div class="historia__secundaria">
          <div class="historia__img" >
            <img :src="temp[index+1].image" alt="imagen">
          </div>
          <div class="historia__content">
            <p>{{temp[index+1].fecha}}</p>
            <h5>{{temp[index+1].title}}</h5>
            <p>Continuar leyendo</p>
          </div>
        </div>
      </div>
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
          title: '“Tuve un sueño, y ya lo estoy viviendo”, relata Lucía, beneficiaria de Tandas para el Bienestar"',
          subtitle: 'La falta de recursos la detenía a emprender lo que siempre quiso: un pequeño negocio de repostería; ahora, dice, “yo creo que hay más para que pueda seguir creciendo…”',
          content: `“Es un sueño que estoy haciendo realidad”, expresa animada Lucía Parada Aguilar en la cocina de su casa, en el municipio de Huamantla, Tlaxcala. En la mesa expone sus obras de arte más recientes: muéganos huamantlecos y pays de limón y de hoyo que acaba preparar gracias su nuevo horno, adquirido con las Tandas para el Bienestar.
            Durante años, Lucía vendió comida o lo que pudiera en la vía pública, pero en su mente siempre estuvo la idea de hacer postres, la falta de recursos la detuvo mucho tiempo.
            Cuando conoció el programa de Microcréditos, o Tandas para el Bienestar, se decidió a llevar a la práctica su proyecto, se inscribió y obtuvo el préstamo que le permitió comprar su horno de trabajo.
            “Yo creo que hay más para poder seguir creciendo mi negocio y realizar bien este sueño que tengo. A lo mejor ¿Por qué no? Hasta puedo llegar a instalar una pastelería ya en forma, que es uno de mis sueños”.
            Lucía afirma que su nuevo negocio lo hizo posible el microcrédito de tandas. “Es una oportunidad que el gobierno nos da, ya depende de uno ser cumplidos o no; en este caso, yo he visto que con este programa sí puede uno crecer”.
            Por eso. Añade, “invito a la gente, de verdad, que se inscriba a estos apoyos que el gobierno está dando porque sí son reales, yo se los digo porque ya lo estoy viviendo”.`,
          fecha: 'lunes, 06 de septiembre de 2021',
          // categoria: null,
          // autor: ull
        },
        {
          image: 'https://www.gob.mx/cms/uploads/article/main_image/112183/cover_IMG_9383Web.jpg',
          title: '“Estoy feliz de poder ayudar a mi papá”, dice Maricruz, orgullosa de contribuir al logro de “una casa maravillosa”',
          subtitle: 'Extrovertida y muy generosa, recibe por primera vez un apoyo de gobierno; con la Pensión para el Bienestar de las Personas con Discapacidad ha logrado ser más independiente.',
          content: `Maricruz nació con una discapacidad que le impide caminar, pero nada la detiene; es extrovertida, madura y, por primera vez, derechohabiente de un apoyo gubernamental, la Pensión para el Bienestar de las Personas con Discapacidad, que le entrega el Gobierno de México.
            La pensión le permitió contribuir a mejorar el techo de su vivienda, construido hace muchos años con palma y vigas de madera. 
            “Antes mi casa no era así, no era segura, era más pequeña y tenía palmas y vigas de madera y era peligroso porque las vigas estaban desgastadas, había sufrido ya varios temblores y las vigas casi ya se rompen. Era algo imposible que yo tuviera una casa tan grande y maravillosa como esta”, cuenta.
            A 27 kilómetros de Tapachula, Chiapas, está Puerto Madero, donde vive la joven Maricruz Hernández García. Sentada en su silla de ruedas, en el patio de su casa, relata: “antes era muy duro porque mi papá sí gana dinero, pero, obvio, somos tres niños, tres bocas que alimentar y cuesta mucho, ahora estoy feliz de poder ayudar a mi papá con los gastos de la casa”. 
            Aún recuerda que cuando llegó su pensión, junto con sus papás y dos hermanos comenzaron a planear el arreglo de la casa; sumando su apoyo económico a los ahorros de su papá y la beca de uno de sus hermanos, poco a poquito, consiguieron cemento, láminas, todos los materiales.
            “Con el dinero, mi papá construyó también una rampita y ahora puedo entrar al baño yo sola. Yo puedo asearme, me subo a mi cama, casi soy independiente”, presume. 
            El apoyo que recibe cada dos meses también ayuda en la compra de alimentos y en el mejoramiento de su habitación, que anteriormente debía compartir con su familia. 
            Por su discapacidad, ha asistido a terapias de rehabilitación en el DIF de Tapachula y en Tuxtla Gutiérrez, pero debido a la distancia, problemas económicos y posteriormente la pandemia por COVID-19, dejó de asistir. 
            “Pero me fui muy feliz, aunque sea gané en unas olimpiadas que hace la terapia, hace el Instituto de Terapia, hace unas olimpiadas y gané el tercer lugar”.`,
          fecha: '18 de agosto de 2021'
        },
        {
          image: 'https://www.gob.mx/cms/uploads/article/main_image/112018/F95A0040web.jpg',
          title: 'Su vínculo con la tierra motiva el trabajo de jóvenes en Sembrando Vida',
          subtitle: 'Nacemos del campo y a él volvemos, dice Leobardo Pérez, orgulloso de su origen indígena de Totonacapan, en Papantla, Veracruz.',
          content: `“Uno nunca se aleja del campo, es el origen, de ahí nacemos”, cuenta Leobardo Pérez.
            “Incluso trabajando en otros lados, uno siempre está al pendiente de sus plantíos”, dice Leobardo, en la parcela heredada de su padre, en la que forma parte del programa Sembrando Vida y que le da el sustento de toda su familia.
            Sembrador de El Chote, una comunidad enclavada en el corazón de la región indígena de Totonacapan en Papantla, Veracruz, narra que ha trabajado en oficinas de la ciudad, pero siempre retorna al campo, gracias al cual –con el trabajo de su familia- pudo concluir sus estudios.
            Por eso no se rompe el vínculo con la tierra, dice. “Nunca me he alejado del campo, porque es el origen, de ahí nacemos, del campo”. Añade, convencido de que en el medio rural se puede tener una buena calidad de vida, si se aprovechan las oportunidades.
            “Se cree que en el campo no hay dinero, no hay recursos, pero yo opino lo contrario porque gracias a Dios el campo me ha brindado muchas cosas”, agrega y sugiere a las y los demás jóvenes como él, dar una oportunidad a las labores agrícolas, para no migrar a las ciudades o a otros países.`,
          fecha: '12 de agosto de 2021'
        },
        {
          image: 'https://www.gob.mx/cms/uploads/article/main_image/111902/ImgBlogCamerinoGarcia.jpg',
          title: 'Con el apoyo de Sembrando Vida, campesinas y campesinos del Zapotal reactivan la producción de vainilla',
          subtitle: 'Al mismo tiempo, protegen la zona arqueológica de El Zapotal y sus vestigios históricos de la cultura totonaca, cuenta don Camerino García',
          content: `Para proteger el patrimonio cultural, en ciertos perímetros de las zonas arqueológicas es mejor no sembrar árboles de raíces grandes; es el caso de El Zapotal, la zona arqueológica de la cultura totonaca que enriquece el estado de Veracruz.
            En sus inmediaciones tiene su parcela don Camerino García, quien ha optado por la producción de vainilla ahora que –dice- el programa Sembrando Vida da la oportunidad a los pequeños productores de reavivar la producción de ese aromático cultivo.
            Y es que, cuenta don Camerino, la producción de vainilla bajó en la región a pesar de su alta demanda.
            Pero ahora, Sembrando Vida, el programa de la Secretaría de Bienestar con presencia en veinte estados de la República y más de 400 mil sembradoras y sembradores que reforestan y recuperan el campo, ha dado un nuevo empuje a la producción de vainilla.
            “Con el apoyo del programa, -presume don Camerino- en la Comunidad de Aprendizaje Campesino (CAC) ya nos estamos organizando, no solo para cultivar la vainilla, sino para procesarla y venderla a un precio más justo para productores y consumidores”.
            Además de la reforestación, uno de los objetivos primordiales de Sembrando Vida es la reconstrucción del tejido social mediante el trabajo colectivo en las comunidades y la reactivación de la economía desde abajo en las localidades más pobres del país.`,
          fecha: '09 de agosto de 2021'
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
  
  h3 {
    font-weight: 600;
  }

  h5 {
    font-size: 15px;
    font-weight: 800;
  }

  .historia__main {
    display: flex;
    margin-bottom: 15px;
  }

  .historia__main-img {
    padding: 0px 15px;
    height: auto;
    width: auto;
    flex: 2;
  }

  .historia__main-img img {
    width: 100%;
  }

  .historia__main-content {
    flex: 1;
    padding: 0px 15px;
  }

  .historia__below {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .historia__secundaria {
    padding: 0px 15px;
  }

  .historia__img img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

</style>