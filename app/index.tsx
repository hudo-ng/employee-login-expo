import { useRouter } from "expo-router";
import { Formik, validateYupSchema } from "formik";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import * as Yup from "yup";

const logInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  passsword: Yup.string()
    .min(6, "Password too short")
    .required("Password required"),
});

export default function LogIn() {
  const router = useRouter();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={logInSchema}
      onSubmit={() => {
        router.push("/");
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Log In</Text>
          <View style={styles.formField}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
          </View>
          <View style={styles.formField}>
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
          </View>

          <View style={styles.btnContainer}>
            <Pressable
              onPress={() => handleSubmit()}
              style={({ pressed }) => [
                styles.btn,
                pressed && styles.pressedBtn,
              ]}
            >
              <Text style={styles.btnText}>Log In</Text>
            </Pressable>
            <Pressable
              onPress={() => router.push("/register")}
              style={({ pressed }) => [
                styles.btnSecondary,
                pressed && styles.pressedBtn,
              ]}
            >
              <Text>Register</Text>
            </Pressable>
          </View>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: 500,
  },

  formField: {
    alignItems: "flex-start",
    marginTop: 12,
  },

  input: {
    width: 300,
    color: "gray",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
  },

  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: 200,
    marginTop: 12,
  },

  btn: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
  },

  btnSecondary: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    borderColor: "black",
  },

  btnText: {
    color: "white",
    fontWeight: 400,
  },

  pressedBtn: {
    opacity: 0.75,
  },

  error: {
    color: "red",
    marginTop: 6,
  },
});
