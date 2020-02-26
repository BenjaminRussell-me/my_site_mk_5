<template>
    <div id="form-holder">
      <div id="form-grid">
        <div class="text-holder">
          <h3>
           Hey there!
          </h3>
          <h3>
            What's Good?
          </h3>
        </div>

        <hr>

        <form id="contact-form">
          <div class="inner-form-grid ">
            <label class="fields" for="first-name" id="field1" v-on:click="clicked(1)">
              <span class="fieldText">* First Name</span>
              <input id="first-name" type="text" value="" name="First Name"  required  v-on:focus="clicked(1)">
            </label>

            <label class="fields" id="field2" v-on:click="clicked(2)" >
              <span class="fieldText">* Last Name</span>
              <input id="last-name" type="text" value="" name="Last Name"  required v-on:focus="clicked(2)">
            </label>

            <label class="fields" id="field3" v-on:click="clicked(3)" >
              <span class="fieldText">* Phone Number</span>
              <input id="phone" type="tel" value="" name="Phone" required v-on:focus="clicked(3)">
            </label>

            <label class="fields" id="field4" v-on:click="clicked(4)" >
              <span class="fieldText">* Email Address</span>
              <input id="email" type="email" value="" name="Email" required v-on:focus="clicked(4)">
            </label>

            <textarea class="slot-2-1-1" id="message" name="Questions or Comments" placeholder="* Questions or Comments" value="" ></textarea>

          </div>

          <div id="submit-button" >
            <input class="btn1" type="button" value="Get Started!"
                   v-on:click="validateForm()">
          </div>
        </form>

      </div>
      <div style="text-align:center; color:white; font-weight: bold" id="status"><h4>{{statusText[0]}}</h4></div>
    </div>

</template>

<script>
    export default {
        name: "bkForm",
        data () {
            return{
                howMany: [1,2,3,4],
                failed: false,
                statusText: [],
                consent: false
            }
        },

        methods: {
            // Ui logic below here
            clicked (number){
                const selected = document.querySelector("#field" + number);
                selected.classList.add("fieldFocus");
                this.unclicked(number);
            },
            unclicked (number){
                const unselected = this.howMany.filter(x => {
                    return x !== number;
                });
                unselected.forEach(b => {
                    const others = document.querySelector("#field" + b);
                    const input = document.querySelector("#field" + b + " input");
                    if (input.value === "") {
                        others.classList.remove("fieldFocus");
                    }
                });
            },

            // form validation below here
            validateForm () {
                const n = document.forms["contact-form"]["first-name"];
                const l = document.forms["contact-form"]["last-name"];
                const p = document.forms["contact-form"]["phone"];
                const e = document.forms["contact-form"]["email"];
                const t = document.forms["contact-form"]["message"];
                const fields = [n,l,p,e,t];

                const check = fields.filter(x => {
                    if(x.type === 'email' && x.value !== '' ){
                        const emailPattern = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;
                        if(!emailPattern.test(x.value) ){
                            console.log('checking email ' + x.value);
                            return x.value
                        }
                    } else if (x.type === 'tel' && x.value !== ''){
                        const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
                        if(!phonePattern.test(x.value) ){
                            console.log('checking phone ' + x.value);
                            return x.value
                        }

                    } else {
                        return x.value === '';
                    }
                });
                console.log(check);
                check.forEach(x => {
                    this.statusText.push(`Please check to ensure that ${x.name} is correctly filled out`);
                    console.log(this.statusText)
                });
                if(check.length === 0){
                    this.$emit('thankYou')
                } else {
                    this.openStatus()
                }
            },

            //Error Bar Logic below here
            openStatus () {
                const status = document.getElementById("status");
                status.classList.remove('status-close');
                status.classList.add('status-open');
                console.log('open');
                setTimeout( () =>{
                    this.addOnClick()
                }, 500);
            },

            addOnClick () {
                document.addEventListener("click", this.closeStatus)
            },

            closeStatus () {
                const status = document.getElementById("status");
                status.classList.add('status-close');
                status.classList.remove('status-open');
                this.statusText= [];
                console.log('close');
                this.removeOnClick();
            },

            removeOnClick () {
                document.removeEventListener("click", this.closeStatus)
            }
        }

    }
</script>

<style scoped lang="scss">
  .text-holder{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
#form-holder{
  align-self: center;
  justify-self: center;
  display: grid;
  width: 100%;
  @media (max-width: 640px) {
    width: 95%;
  }
}
  #form-grid{
    justify-self: center;
    align-self: center;
    display: grid;
    background-color: rgba(255, 255, 255, 0.76);
    padding: 3% 3% 1% 3%;
.inner-form-grid{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
}
    label{
      display: grid;
    }
  }
  form{
    margin: 1rem 0 0 0;
    position: inherit;
    @media (max-width: 640px) {
      margin: 0;
    }
    .submit-button input{
      background-color: blue;
    }
    textarea{
      min-height: 150px;
      grid-column: span 2;
      resize: none;
      @media (max-width: 640px) {
        min-height: 120px;
      }
    }
    #consent-grid{
      display: grid;
      grid-column-gap: 1rem;
      grid-template-columns: auto 1fr;
      margin-top: 10px;
      #consent{
        display: none;
      }
      #myCheck{
        align-self: center;
        cursor: pointer;
        display: block;
        height: 20px;
        width: 20px;
        border: 3px solid dimgrey;
        background: #ffffff;
        #check{
          display: block;
          background: blue;
          height: 100%;
          width: 100%;
          -webkit-clip-path: polygon(40% 70%, 100% 6%, 100% 38%, 43% 100%, 0 73%, 0 47%);
          clip-path: polygon(40% 70%, 100% 6%, 100% 38%, 43% 100%, 0 73%, 0 47%);
          transition: .3s ease-in-out;
          transform: scale(.9);
          opacity: 0;
        }
      }
      #consent:checked + #myCheck{
        animation: bounce forwards .3s ease-in;
        #check{
          transition: .2s ease-in-out;
          transform: scale(1.45) translateY(-4px);
          opacity: 1;
        }
      }
    }
    #submit-button{
      display: grid;
      justify-content: center;
      margin-top: 1rem;
      input{
        background: blue;
      }
    }

  }


  @keyframes bounce {
    0%{
      transform: translateY(0);
    }
    50%{
      transform: translateY(2px);
    }
    100%{
      transform: translateY(0);
    }
  }

  .start-closed{
    display: none;
  }

  .open{
    animation: open .4s forwards ease-in-out;
  }

  .close{
    animation: close .4s forwards ease-in-out;
  }

  .grow{
    animation: grow .2s forwards ease-in-out;
  }



  .fields{
    display: grid;
    .fieldText{
      grid-area: 1 / 1 / 2 / 2;
      z-index: 11;
      margin: 5px 0 0 1rem;
      cursor: text;
      transform: translateY(0);
      transition: .3s
    }
    input, textarea{
      grid-area: 1 / 1 / 2 / 2;
    }
  }

  .fields,textarea{

    margin: .2rem 0 0 0;
    @media (max-width: 640px) {
      margin: 1.2rem 0 0 0;
    }
    @media (max-width: 1050px) {
      margin: .9rem 0 0 0;
    }
  }

  .fieldFocus{
    .fieldText{
      grid-area: 1 / 1 / 2 / 2;
      z-index: 11;
      margin: 0 0 0 0;
      transform: translateY(-1.2rem);
      transition: .2s;
      font-size: 1rem;
      @media (max-width: 640px) {
        transform: translateY(-1rem);
        font-size: .8rem;
      }
    }
  }

  #status{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin: auto;
    background: rgba(156, 17, 41, 0.9);
    overflow: hidden;
    display: grid;
    align-content: center;
    justify-content: center;
    box-shadow: 0 3px 5px black;
    font-size: 2rem;
  }

  .status-closed{
    height: 0;
  }

  .status-open{
    animation: status-open forwards .4s ease-out;
    z-index: 9999;
  }
  @keyframes status-open {
    from {
      height: 0px;
    }

    to {
      height: 100px;
    }
  }

  input,textarea{
    border:none;
    box-shadow: 0 0 1px .5px black;
    transition: .5s;
    padding:.5rem .5rem .5rem .5rem;
  }

  input:focus,textarea:focus{
    outline: none;
    box-shadow: 0 0 3px 1px black;
    transition: .5s ease-in-out;
  }
</style>
