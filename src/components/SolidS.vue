<template>
  <h2>UJIAN</h2>

  <div>
    <h3>Pilihan Ganda</h3>
    <div>
      <div>
        <strong>{{ pertanyaanPG1 }}</strong>
      </div>
      <div>
        <em>{{ pilihanPG1 }}</em>
      </div>
    </div>
    <div>
      <div>
        <strong>{{ pertanyaanPG2 }}</strong>
      </div>
      <div>
        <em>{{ pilihanPG2 }}</em>
      </div>
    </div>
    <br>
    <h3>Essay</h3>
    <div>
      <strong>{{ pertanyaanEssay1 }}</strong>
    </div>
    <div>
      <strong>{{ pertanyaanEssay2 }}</strong>
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
  pertanyaanEssay1: string = '';
  pertanyaanEssay2: string = '';
  pertanyaanPG1: string = '';
  pertanyaanPG2: string = '';
  pilihanPG1: string[] = [];
  pilihanPG2: string[] = [];

  beforeMount(): void {
    this.generateUjian();
  }

  generateUjian() {
    this.pertanyaanEssay1 = 'Siapa ploklamator NKRI?';
    this.pertanyaanEssay2 = 'Siapa penjajah Indonesia?'
    this.pertanyaanPG1 = 'Tahun berapa Indonesia merdeka?';
    this.pertanyaanPG2 = 'Siapa wakil presiden Soekarno?';
    this.pilihanPG1 = ['A. 1945', 'B. 1459', 'C. 1594'];
    this.pilihanPG2 = ['A. Soekirman', 'B. Soelawesi', 'C. Mas Ahung'];
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
