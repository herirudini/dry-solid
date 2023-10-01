<template>
  <h2>UJIAN</h2>

  <div>
    <h3>Pilihan Ganda</h3>
    <div v-for="i in pGList">
      <div>
        <strong>{{ i.pertanyaan }}</strong>
      </div>
      <div v-for="j in i.jawaban">
        <em>{{ j }}</em>
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

@Options({
  props: {
    msg: String,
  }
})
export default class SolidS extends Vue {
  pGList: { pertanyaan: string, jawaban: string[] }[] = [];
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
        jawaban: ['A. 1945', 'B. 1459', 'C. 1594']
      },
      {
        pertanyaan: 'Siapa wakil presiden Soekarno?',
        jawaban: ['A. Soekirman', 'B. Soelawesi', 'C. Mas Ahung']
      }
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
