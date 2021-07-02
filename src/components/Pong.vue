<template>
    <div>
        <Navbar/>
        <b-container fluid="md">
        <div class="jumbotron" style="background:transparent !important">
          <h1>Container</h1>
          <div class="row">
            <div class="span4">
              <div class="clearfix content-heading">
                <img style="float: left" width="220px" src="https://res.cloudinary.com/practicaldev/image/fetch/s--MW0KkLD6--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/sb89a5opxft3c3efzd4c.jpeg">
                <b><Paragraph :text="text"/></b>
              </div>
            </div>
          </div>
          <br>
          <Paragraph :text="text2"/>
          <br>
          <Paragraph :text="text2"/>
          <br>
          <Paragraph :text="text2"/>
          <br>
          <Paragraph :text="text2"/>
          <br>
          <b-button href="/">Books</b-button>
          <b-button class="ml-2" v-b-modal.test-modal>RandomCat</b-button>
        </div>
        </b-container>
        <TestModal/>
        <Footer/>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Paragraph from './Paragraph.vue';
import TestModal from './TestModal.vue';
import Footer from './Footer.vue';

export default {
  components: {
    Navbar, Paragraph, TestModal, Footer,
  },
  data() {
    return {
      text: 'Dit is de Vue-Laravel app. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut viverra, lectus vitae dignissim ultrices, dolor lectus congue orci, eget mollis velit neque sit amet lectus. Phasellus et elit ut nibh auctor porttitor. Etiam tristique lobortis leo, non dignissim tortor finibus vel. Donec vitae egestas nunc. Morbi eu molestie felis, in consectetur velit. Vestibulum quam velit, facilisis sit amet convallis nec.',
      text2: 'Op een groot internetforum, dat deels is gericht op illegale activiteiten, wordt sinds zondag een groot bestand aangeboden met buitgemaakte gegevens van studenten en medewerkers van Hogeschool InHolland. In totaal gaat het om 56.000 rijen met gegevens van mogelijk 56.000 verschillende personen. Per persoon wisselt het wat er precies wordt aangeboden. Soms is het alleen het mailadres, maar in andere gevallen zitten daar ook het fysieke adres, het telefoonnummer en zelfs het versleutelde wachtwoord bij. Op een groot internetforum, dat deels is gericht op illegale activiteiten, wordt sinds zondag een groot bestand aangeboden met buitgemaakte gegevens van studenten en medewerkers van Hogeschool InHolland. In totaal gaat het om 56.000 rijen met gegevens van mogelijk 56.000 verschillende personen. Per persoon wisselt het wat er precies wordt aangeboden. Soms is het alleen het mailadres, maar in andere gevallen zitten daar ook het fysieke adres, het telefoonnummer en zelfs het versleutelde wachtwoord bij.',
    };
  },
};
</script>
