import { Formik, getIn } from "formik";

const withFormik = (Component, options) => {
  const { validationsSchema } = options;
  return function Wrapper(props) {
    return (
      <Formik
        initialValues={props.initialValues || {}}
        validationSchema={validationsSchema}
        onSubmit={props.onFormikSubmit || (() => null)}
      >
        {(formikProps) => {
          const getError = (name) => {
            return (
              getIn(formikProps.errors, name) &&
              getIn(formikProps.touched, name) &&
              getIn(formikProps.errors, name)
            );
          };
          return (
            <form onSubmit={formikProps.handleSubmit}>
              <Component
                {...props}
                formikProps={{ ...formikProps, getError }}
              />
            </form>
          );
        }}
      </Formik>
    );
  };
};

export default withFormik;
