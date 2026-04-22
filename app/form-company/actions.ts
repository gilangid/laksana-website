'use server';

export async function submitForm(formData: FormData) {
  const data: Record<string, any> = {};
  formData.forEach((value, key) => {
    if (value instanceof File) {
      data[key] = {
        name: value.name,
        size: value.size,
        type: value.type,
      };
    } else {
      data[key] = value;
    }
  });

  // Log to TERMINAL
  console.log("--- Server Log (Terminal) ---");
  console.log(JSON.stringify(data, null, 2));

  return { success: true, data };
}
