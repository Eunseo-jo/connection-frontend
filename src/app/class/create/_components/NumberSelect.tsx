import Select, {
  ActionMeta,
  components,
  DropdownIndicatorProps,
  GroupBase,
  IndicatorSeparatorProps,
  SingleValue,
  StylesConfig,
} from 'react-select';

interface SelectOption {
  value: number;
  label: string;
}

interface SelectComponentProps {
  instanceId: string;
  defaultValue: SelectOption;
  onChange: (
    selectedOption: SingleValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  isDisabled?: boolean;
  options: SelectOption[];
}

const NumberSelect = ({
  instanceId,
  defaultValue,
  onChange,
  isDisabled = false,
  options,
}: SelectComponentProps) => {
  const customComponents = {
    DropdownIndicator: NumberDropdownIndicator as any,
    IndicatorSeparator: NumberIndicatorSeparator as any,
  };

  return (
    <Select
      instanceId={instanceId}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      components={customComponents}
      styles={numberSelectStyles}
      isDisabled={isDisabled}
    />
  );
};

export default NumberSelect;

const { DropdownIndicator, IndicatorSeparator } = components;

const NumberDropdownIndicator: React.ComponentType<
  DropdownIndicatorProps<SelectOption, false>
> = (props: DropdownIndicatorProps<SelectOption, false>) => {
  return props.selectProps.menuIsOpen ? null : <DropdownIndicator {...props} />;
};

const NumberIndicatorSeparator: React.ComponentType<
  IndicatorSeparatorProps<SelectOption, false>
> = (props: IndicatorSeparatorProps<SelectOption, false>) => {
  return props.selectProps.menuIsOpen ? null : (
    <IndicatorSeparator {...props} />
  );
};

const numberSelectStyles:
  | StylesConfig<
      {
        value: number;
        label: string;
      },
      false,
      GroupBase<{
        value: number;
        label: string;
      }>
    >
  | undefined = {
  menuList: (base) => ({ ...base, maxHeight: '200px' }),
  control: (provided, state) => ({
    ...provided,
    borderRadius:
      state.selectProps.menuIsOpen || state.menuIsOpen
        ? '1.3rem 1.3rem 0 0'
        : '1.875rem',
    boxShadow: 'none',
    borderColor: 'var(--sub-color4)',
    height: '100%',
    width: '100%',
    '&:hover': { borderColor: 'var(--sub-color4)' },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    width: state.selectProps.menuIsOpen ? '4.275rem' : provided.width,
    justifyContent: 'center',
    borderColor: 'none',
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: '-10px',
    boxShadow: 'none',
    border: '1px solid var(--sub-color4)',
    borderTop: 'none',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--sub-color4)' : 'white',
    color: 'black',
    '&:hover': {
      backgroundColor: '#eceaea',
    },
  }),
};
