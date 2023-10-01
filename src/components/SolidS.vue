<template>
  <h2>UJIAN</h2>

  <div>
    <h3>Pilihan Ganda</h3>
    <div v-for="i in pGList">
      <div>
        <strong>{{ i.pertanyaan }}</strong>
      </div>
      <div>
        <em>A. {{ i.pilihan.a }}</em>
        <br>
        <em>B. {{ i.pilihan.b }}</em>
        <br>
        <em>C. {{ i.pilihan.c }}</em>
        <br>
        <!-- <em v-if="i.totalPilihan === 4">D. {{ i.pilihan.d }}</em> -->
      </div>
    </div>
  </div>

  <div>
    <h3>Essay</h3>
    <div v-for="n in essayList">
      <div>
        <strong>{{ n }}</strong>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { IPG } from '../interfaces/pg.interface';

@Options({
  props: {
    msg: String,
  }
})
export default class SolidS extends Vue {
  pGList: IPG[] = [];
  essayList: string[] = [];

  mounted(): void {
    this.generateUjian();
  }

  generateUjian() {
    this.generatePG();
    this.generateEssay();
  }
  generatePG() {
    this.pGList = [
      {
        pertanyaan: 'Tahun berapa Indonesia merdeka?',
        pilihan: {a: '1945', b: '1459', c: '1594'}
      },
      {
        pertanyaan: 'Siapa wakil presiden Soekarno?',
        pilihan: {a: 'Soekirman', b: 'Soelawesi', c: 'Mas Ahung'}
      },
      // {
      //   pertanyaan: 'Siapa wakil presiden Soekarno?',
      //   pilihan: {a: 'Soekirman', b: 'Soelawesi', c: 'Mas Ahung', d: 'Bang Bima'},
      //   totalPilihan: 4
      // },
    ]
  }
  generateEssay() {
    this.essayList = [
      'Siapa ploklamator NKRI?',
      'Siapa penjajah Indonesia?'
    ]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
