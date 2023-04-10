import InputForm from '../components/Form';

const CalcScreen = () => {
  return (
    <div className="relative px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-10 sm:py-6">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Risk Predictor
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            To find out your risk of developing diabetes within the next five
            years, complete the following short questions.
          </p>
          <div className="mt-10 justify-center gap-x-6">
            <InputForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalcScreen;
