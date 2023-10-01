<template>
  <h2>UJIAN</h2>

  <div>
    <h3>Pilihan Ganda</h3>
    <div v-for="i in pGList">
      <div>
        <strong>{{ i.pertanyaan }}</strong>
      </div>
      <div v-for="j in i.pilihanList">
        <em>{{ j }}</em>
        <br>
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
      this.generatorPG(
        'Tahun berapa Indonesia merdeka?',
        ['1945', '1459', '1594']
      ),
      this.generatorPG(
        'Siapa wakil presiden Soekarno?',
        ['Soekirman', 'Soelawesi', 'Mas Ahung']
      ),
      this.generatorPG(
        'Siapa nama guru terkenal?',
        ['HOS Tjokro Aminoto', 'Soelawesi', 'Mas Ahung', 'Heri Gantengs']
      ),
    ]
  }
  generatorPG(pertanyaan: string, pilihans: string[]): IPG {
    let newPilihans: IPG['pilihanList'] = [];
    pilihans.forEach((item, index) => {
      const alphabetIndex = this.getAlphabetSequences(index);
      const pilihan = `${alphabetIndex} ${item}`
      newPilihans.push(pilihan);
    })
    const pilihanList = newPilihans
    return {
      pertanyaan,
      pilihanList
    }
  }
  getAlphabetSequences(index: number) {
    const alphabet = String.fromCharCode(65 + index);
    return `${alphabet}.`;
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
