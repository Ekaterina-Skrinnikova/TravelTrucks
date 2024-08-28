import Text from "../Text/Text";
import Button from "../Button/Button";

export default function FiltersBar() {
  return (
    <div>
      <lable>Location</lable>
      <input></input>

      <Text>Filters</Text>

      <Text>Vehicle equipment</Text>
      <div>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          AC
        </Button>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          Automatic
        </Button>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          Kitchen
        </Button>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          TV
        </Button>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          Bathroom
        </Button>
      </div>

      <Text>Vehicle type</Text>
      <div>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          Van
        </Button>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          Fully Integrated
        </Button>
        <Button>
          <svg>
            <use href=""></use>
          </svg>
          Alcove
        </Button>
      </div>

      <Button>Search</Button>
    </div>
  );
}
