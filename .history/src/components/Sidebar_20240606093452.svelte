<script lang="ts">
  import { buttonSelected } from "../store";
  import removeBackground from "../assets/img/removeBackground.png";
  import restore from "../assets/img/restore.png";
  import blur from "../assets/img/blur.png";
  import rounded from "../assets/img/rounded.png";
  import rotate from "../assets/img/rotate.png";
  import addBackground from "../assets/img/addBackground.png";
  import logo from "../assets/img/origami.png";

const convert = (type: string): any => {
    // iterar un objeto para cambiarle el valor a la propiedad que por defecto es false
    const obj: { [key: string]: boolean } = {
        buttonRemove: false,
        buttonRestore: false,
        buttonBlur: false,
        buttonRounded: false,
        buttonRotate: false,
        buttonBackground: false,
    };

    obj[type] = true;
    return obj;
};
  const handleClick = (type: string) => {
    // TODO TERMINAR
    // if(buttonSelected[type] === true){
      


      
    // } else{
      // nuevo objeto
      let newSelected = convert(type);
      buttonSelected.set(newSelected);
      // mando elestado con el nuevo objeto
    // }
  };
</script>


<aside
  id="default-sidebar"
  class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
  aria-label="Sidebar"
>
  <!-- <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"> -->
    <!-- <div class="flex items-center ps-2.5 mb-5" title="bird icons ">
      <img src={logo} class="h-6 me-3 sm:h-7" alt="Flowbite Logo" />
      <span
        class="text-3xl font-bold text-blue-900 tracking-tighter whitespace-nowrap self-center"
      >
        Style<span class="text-blue-600">Craft</span>
      </span>
    </div> -->
    <!-- <ul class="mt-16 space-y-6 font-medium">
      <li
      class={`${$buttonSelected.buttonRemove && `border-2 rounded-lg border-blue-700`}`}
      >
        <button
          id="remove"
          on:click={(event) => {
            handleClick("buttonRemove");
          }}
          class={`flex items-center p-2 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group`}
        >
          <img
          alt="removeBackground" 
          class="w-5 h-5 "
          src={removeBackground}
          />
          <span id="remove" class="ms-3 hover:text-blue-600">Remove Background</span>
        </button>
      </li>
      <li
      class={`${$buttonSelected.buttonRestore && `border-2 rounded-lg border-blue-700`}`}
      >
        <button
          id="restore"
          on:click={(event) => {
            handleClick("buttonRestore");
          }}
          class={` flex items-center p-2 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group`}
        >
        <img
        alt="restore" 
        class="w-5 h-5"
        src={restore}
        />
          <span id="restore" class="ms-3 hover:text-blue-600">Restore</span>
        </button>
      </li>
      <li
      class={`${$buttonSelected.buttonBlur && `border-2 rounded-lg border-blue-700`}`}
      >
        <button
          id="blur"
          on:click={(event) => {
            handleClick("buttonBlur");
          }}
          class={` flex items-center p-2 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group`}
        >
        <img
        alt="blur" 
        class="w-5 h-5"
        src={blur}
        />
          <span id="blur" class="ms-3 hover:text-blue-600">Blur</span>
        </button>
      </li>
      <li
      class={`${$buttonSelected.buttonRounded && `border-2 rounded-lg border-blue-700`}`}
      >
        <button
          id="rounded"
          on:click={(event) => {
            handleClick("buttonRounded");
          }}
          class={` flex items-center p-2 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group`}
        >
        <img
        alt="rounded" 
        class="w-5 h-5"
        src={rounded}
        />
          <span id="rounded" class="ms-3 hover:text-blue-600">Rounded</span>
        </button>
      </li>
      <li
      class={`${$buttonSelected.buttonRotate && `border-2 rounded-lg border-blue-700`}`}
      >
        <button
          id="rotate"
          on:click={(event) => {
            handleClick("buttonRotate");
          }}
          class={` flex items-center p-2 text-gray-900  dark:text-white  dark:hover:bg-gray-700 group`}
        >
        <img
        alt="rotate" 
        class="w-5 h-5"
        src={rotate}
        />
          <span id="rotate" class="ms-3 hover:text-blue-600">Rotate</span>
        </button>
      </li>
      <li
      class={`${$buttonSelected.buttonBackground && `border-2 rounded-lg border-blue-700`}`}
      >
        <button
          id="background"
          on:click={(event) => {
            handleClick("buttonBackground");
          }}
          class={` flex items-center p-2 text-gray-900 dark:text-white  dark:hover:bg-gray-700 group`}
        >
        <img
        alt="addBackground" 
        class="w-5 h-5"
        src={addBackground}
        />
          <span id="background" class="ms-3 hover:text-blue-600">Background</span>
        </button>
      </li>
    </ul> -->
  <!-- </div> -->
</aside>