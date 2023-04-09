import { Formik, Field, Form } from 'formik';
import { useState } from 'react';

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  onChange,
  value,
}) => {
  return (
    <div className="button-group flex gap-1 flex-wrap">
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          className={`button px-3 py-1 border rounded-lg hover:transform hover:-translate-y-1 ${
            value === option.value ? 'text-white bg-indigo-600' : ''
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export const SelectOptionForm: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const genderOptions: Option[] = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ];
  const ageOptions: Option[] = [
    { value: 'under 35', label: 'Under 35' },
    { value: '35-44', label: '35-44' },
    { value: '45-54', label: '45-54' },
    { value: '55-64', label: '55-64' },
    { value: '65 or over 65', label: '65 or over 65' },
  ];

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        gender: '',
        age: '',
        bmi: '',
        bloodPressure: '',
        pregnancies: 0,
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="gender">What is your gender?</label>
            <Field
              name="gender"
              component={() => (
                <ButtonGroup
                  options={genderOptions}
                  value={values.gender}
                  onChange={(value: string) => {
                    setSelectedOption(value);
                    setFieldValue('gender', value);
                  }}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 items-start my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="age">What is your age group?</label>
            <Field
              name="age"
              component={() => (
                <ButtonGroup
                  options={ageOptions}
                  value={values.age}
                  onChange={(value: string) => {
                    setSelectedOption(value);
                    setFieldValue('age', value);
                  }}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="pregnancies">
              Pregnancies rate: {values.pregnancies}
            </label>
            <Field name="pregnancies">
              {({ field }: { field: any }) => (
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={1}
                  id="pregnancies"
                  {...field}
                />
              )}
            </Field>
          </div>
          <div className="grid grid-cols-1 my-6 gap-y-1 sm:grid-cols-2">
            <label htmlFor="bloodPressure">
              What is your blood pressure level?
            </label>
            <Field type="number" name="bloodPressure" id="bloodPressure" className="block w-[80px] rounded-md text-center border-0 p-1 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-400 focus:outline-none sm:text-sm sm:leading-2"/>
          </div>
          <button
            type="submit"
            className="mt-5 float-right rounded-md bg-indigo-600 px-3 py-2 text-md font-semibold leading-5 text-white hover:bg-indigo-500"
          >
            Check <span aria-hidden="true">→</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

interface Option {
  value: string;
  label: string;
}

interface ButtonGroupProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
}

interface FormValues {
  age: string;
  gender: string;
  bmi: string;
  bloodPressure: string;
  pregnancies: number;
}
