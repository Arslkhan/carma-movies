<template>
  <ul :class="ulClass" @click="starsClicked">
    <img className="WafRatingStars" v-if="score >=1 && score<=1.49" src="/assets/star1.svg">
    <img className="WafRatingStars" v-else-if="score >=1.5 && score <=2.49" src="/assets/star2.svg">
    <img className="WafRatingStars" v-else-if="score >=2.5 && score <=3.49" src="/assets/star3.svg">
    <img className="WafRatingStars" v-else-if="score >=3.5 && score <=4.49" src="/assets/star4.svg">
    <img className="WafRatingStars" v-else-if="score >=4.5 && score <=5" src="/assets/star5.svg">
    <img className="WafRatingStars" v-else src="/assets/star0.svg">

    <!-- <li v-for="(star, index) in stars" :key="index">
      <svg v-if="star ==='fa-star'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" version="1.1" width="16" height="16" fill="#f5da00" >
        <g id="#000000ff">
          <path  opacity="1.00" d=" M 122.45 0.00 L 127.27 0.00 C 130.05 0.75 132.86 1.92 134.78 4.17 C 137.03 6.85 138.22 10.20 139.78 13.28 C 148.57 30.85 157.12 48.53 165.90 66.09 C 167.70 69.64 169.05 73.48 171.55 76.62 C 173.64 79.17 176.88 80.33 180.02 80.95 C 200.02 85.00 220.03 89.01 240.02 93.12 C 245.15 94.10 248.94 98.48 250.00 103.47 L 250.00 107.36 C 249.27 112.36 245.38 115.74 241.44 118.40 C 227.18 129.13 213.04 140.02 198.77 150.75 C 196.43 152.50 194.23 154.63 193.29 157.48 C 191.78 161.15 193.05 165.10 193.66 168.82 C 197.65 190.91 201.63 213.01 205.56 235.11 C 206.99 241.93 201.92 248.67 195.25 250.00 L 190.36 250.00 C 188.55 249.47 186.78 248.78 185.12 247.88 C 167.48 237.85 149.74 227.98 132.08 217.98 C 128.77 215.93 124.57 215.25 120.86 216.59 C 118.29 217.58 115.95 219.07 113.56 220.42 C 97.36 229.58 81.11 238.66 64.93 247.85 C 63.27 248.74 61.52 249.44 59.73 250.00 L 54.69 250.00 C 48.09 248.71 43.00 242.06 44.37 235.29 C 48.54 211.49 52.92 187.72 57.13 163.92 C 58.20 159.05 55.80 153.98 51.76 151.23 C 36.19 139.43 20.64 127.60 5.08 115.79 C 2.40 113.84 0.73 110.84 0.00 107.65 L 0.00 103.36 C 0.78 100.43 2.16 97.53 4.61 95.64 C 7.49 93.22 11.37 92.81 14.92 92.07 C 31.98 88.64 49.03 85.16 66.10 81.72 C 69.62 80.99 73.41 80.60 76.39 78.40 C 78.82 76.70 80.18 73.97 81.47 71.39 C 91.92 50.15 102.43 28.93 112.88 7.70 C 114.64 3.76 118.27 0.95 122.45 0.00 Z"/>
        </g>
      </svg>
      <svg v-else-if="star === 'fa-star-half-o'" fill="#f5da00" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.031 60"><path class="cls-1" d="M828.776,237.723l-11.4,8.657a3,3,0,0,0-.993,1.3,2.948,2.948,0,0,0-.162,1.618l3.078,17.135a3,3,0,0,1-1.275,3.011,3.161,3.161,0,0,1-3.326.147l-13.174-7.409a3.156,3.156,0,0,0-3.09,0L785.257,269.6a3.164,3.164,0,0,1-1.55.4,3.13,3.13,0,0,1-1.777-.551,3,3,0,0,1-1.274-3.011l3.076-17.135a2.929,2.929,0,0,0-.16-1.618,3,3,0,0,0-.993-1.3l-11.4-8.657a3,3,0,0,1-1.117-3.085,3.069,3.069,0,0,1,2.391-2.285l14.654-2.967a3.129,3.129,0,0,0,1.28-.577,3.02,3.02,0,0,0,.885-1.074l7.914-16.018a3.131,3.131,0,0,1,5.586,0l7.91,16.018a3.028,3.028,0,0,0,.884,1.074,3.162,3.162,0,0,0,1.281.577l14.655,2.967a3.07,3.07,0,0,1,2.394,2.285A3,3,0,0,1,828.776,237.723Zm-17.121-2.454a9.22,9.22,0,0,1-3.713-1.675,9.12,9.12,0,0,1-2.647-3.216L800,219.658v36.125a9.188,9.188,0,0,1,4.451,1.166l7.839,4.409-1.976-10.994a9.01,9.01,0,0,1,3.454-8.781l6.122-4.647Z" data-name="half rating" id="half_rating" transform="translate(-769.969 -210)"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#f5da00" width="16" height="16" viewBox="0 0 250 250" version="1.1">
        <g id="#000000ff">
          <path  opacity="1.00" d=" M 122.40 0.00 L 127.42 0.00 C 131.12 0.94 134.68 3.08 136.47 6.56 C 146.44 26.59 156.24 46.71 166.22 66.74 C 167.88 70.05 169.16 73.61 171.47 76.55 C 173.41 78.87 176.28 80.20 179.21 80.77 C 199.44 84.89 219.69 88.95 239.92 93.08 C 245.06 94.04 248.92 98.41 250.00 103.42 L 250.00 107.47 C 249.23 111.57 246.57 114.92 243.11 117.13 C 228.10 128.44 213.19 139.87 198.20 151.20 C 194.17 153.97 191.68 159.07 192.80 163.95 C 197.05 187.67 201.33 211.38 205.56 235.10 C 207.03 242.03 201.71 249.07 194.78 250.00 L 190.35 250.00 C 188.49 249.50 186.71 248.76 185.04 247.83 C 167.22 237.71 149.32 227.72 131.47 217.65 C 127.57 215.32 122.45 215.33 118.54 217.62 C 102.56 226.61 86.59 235.63 70.60 244.62 C 67.06 246.56 63.68 248.94 59.73 250.00 L 54.55 250.00 C 47.89 248.58 42.85 241.73 44.43 234.91 C 48.61 211.25 52.92 187.60 57.13 163.94 C 58.12 159.36 56.09 154.42 52.33 151.69 C 36.59 139.71 20.83 127.75 5.08 115.79 C 2.41 113.85 0.73 110.86 0.00 107.68 L 0.00 103.30 C 1.06 98.37 4.91 94.05 9.96 93.11 C 30.43 88.89 50.93 84.82 71.41 80.62 C 75.39 79.81 78.79 77.03 80.47 73.34 C 91.43 51.28 102.26 29.15 113.21 7.08 C 114.96 3.41 118.51 0.95 122.40 0.00 M 121.34 38.43 C 118.78 39.25 116.88 41.39 115.76 43.77 C 108.41 58.74 101.05 73.71 93.63 88.65 C 92.41 91.41 90.00 93.74 86.95 94.28 C 72.63 97.20 58.32 100.16 43.98 102.99 C 39.63 104.00 36.24 108.55 37.10 113.05 C 37.32 115.80 39.51 117.82 41.53 119.45 C 52.17 127.49 62.77 135.59 73.41 143.64 C 76.06 145.47 77.74 148.82 77.16 152.04 C 74.30 167.63 71.64 183.25 68.68 198.81 C 68.11 202.41 67.32 206.89 70.36 209.65 C 72.92 212.87 77.50 212.18 81.07 211.69 C 94.32 204.51 107.34 196.86 120.56 189.60 C 123.43 187.96 127.00 188.55 129.67 190.31 C 142.24 197.39 154.79 204.51 167.40 211.53 C 171.05 212.30 175.96 212.89 178.58 209.54 C 181.16 207.05 180.96 203.20 180.36 199.95 C 177.40 183.97 174.55 167.97 171.65 151.98 C 170.97 148.64 172.92 145.39 175.58 143.52 C 186.55 135.16 197.57 126.86 208.51 118.47 C 212.01 115.78 213.17 110.26 210.23 106.75 C 208.48 103.88 205.06 102.77 201.90 102.41 C 188.58 99.78 175.29 97.02 161.98 94.30 C 159.26 93.79 156.78 92.00 155.61 89.47 C 148.73 75.61 141.94 61.70 135.02 47.86 C 133.58 45.09 132.68 41.84 130.09 39.87 C 127.71 37.84 124.25 37.64 121.34 38.43 Z"/>
        </g>
      </svg>
    </li> -->
  </ul>
</template>

<script>
export default {
  name: 'MovieRating',
  data() {
    return {
      maxScore: 5
      // stars: []
    }
  },
  props: {
    score: {
      type: [Number],
      required: true
    },
    ulClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  methods: {
    starsClicked() {
      this.$emit('starsClicked');
    },
    isFloat(n) {
      return Number(n) === n && n % 1 !== 0;
    }
  },
  computed: {
    stars() {
      let starsArr = [];
      for (let i = 1; i <= this.maxScore; i++) {
        if (this.score < i) {
          if (this.isFloat(this.score) && (Math.round(this.score) === i)) {
            starsArr.push('fa-star-half-o');
          } else {
            starsArr.push('fa-star-o');
          }
        } else {
          starsArr.push('fa-star');
        }
      }
      return starsArr;
    }
  }
}
</script>

<style lang="scss">
@import '~theme/css/base/text';

.WafRatingStars {
  width: 90px;
  height: auto;
  @media(max-width: 767px) {
    width: 84px;
  }
}

.rating ul {
  padding: 0;
  list-style: none;
  margin: 0;
}

.rating ul li {
  display: inline-block;
  /* margin: 1px; */
}

.rating ul li .fa {
  color: #f5da00;
  @include fluid-type(768px, 1600px, 12px, 16px);
  @media (min-width: 768px) and (max-width: 870px) {
    margin-left: -1px;
  }
}

@media (max-width: 767px) {
  .rating ul li .fa {
    font-size: 16px !important;
  }
}

.rating1 ul {
  /* padding: 0; */
  list-style: none;
  /* margin: 0; */
}

.rating1 ul li {
  display: inline-block;
  /* margin: 1px; */
}

.rating1 ul li .fa {
  color: #f5da00;
  font-size: 18px;
}

.slider-rating {
  display: inline-block;
  width: auto !important;
  margin: 0;
  padding-left: 0;
}

.slider-rating .rating-no {
  margin: 0;
}

.slider-rating li {
  display: inline-flex;
  background: #6ACC0C;
  padding: 0;
  margin: 0 2px 0 0;
  border-radius: 1px;
  width: 17px;
  height: 17px;
  justify-content: center;
  align-items: center;
}

.slider-rating li .fa {
  color: #ffffff;
  font-size: 11px;
}

.cursor-pointer {
  cursor: pointer;
}

@media(min-width: 370px) and (max-width: 423px) {
  .cutsample-box .rating .stars ul li .fa {
    font-size: 12px !important;
  }
  /* .cutsample .rating .stars ul li .fa{
      font-size: 10px !important;
  } */
  .cutsample .cutsample-box .rating .stars ul li .fa {
    font-size: 10px !important;
  }
}

@media(min-width: 423px) and (max-width: 470px) {
  .cutsample-box .rating .stars ul li .fa {
    font-size: 12px !important;
  }
  .cutsample .cutsample-box .rating .stars ul li .fa {
    font-size: 10px !important;
  }
}

@media(max-width: 767px) {
  .padding_right {
    padding-left: 0;
  }
}

@media (max-width: 388px) {
  .rating ul li .fa {
    color: #f5da00;
    font-size: 13px !important;
  }
  .cutsample-box .rating .stars ul li .fa {
    font-size: 12px !important;
  }
}
</style>
