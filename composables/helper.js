import {useAuthStore} from "../store/auth";

export const formatTableState = (columns,state,items) => {
            let rows = [];
            let cells = []
            state.map((item) => {
                cells = []
                cells.push({
                    label: columns[0],
                    value: item[items[0]]
                })

                cells.push({
                    label: columns[1],
                    value: item[items[1]]
                })

                cells.push({
                    label: columns[2],
                    value: item[items[2]]
                })

                cells.push({
                    label: columns[3],
                    value: item[items[3]]
                })

                cells.push({
                    label: "id",
                    value: item.id
                })

                rows.push({
                    cells
                })
            })
    return rows
}


export const handleUploadImage=async(token,formData)=>{
    const config = useRuntimeConfig()
    try {
        const res = await fetch(`${config.public.baseURLFront}files/uploads`, {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return await res.json()
    } catch (error) {
        throw error;
    }
}

export const handleUploadImageWithPercentage = async (token, formData, onProgress) => {
  const config = useRuntimeConfig();
  try {
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable && onProgress) {
          const progress = Math.round((event.loaded / event.total) * 100);
          onProgress(progress); // Update progress in real-time
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(new Error('Upload failed'));
        }
      });

      xhr.addEventListener('error', () => {
        reject(new Error('Upload failed'));
      });

      xhr.open('POST', `${config.public.baseURLFront}files/uploads`, true);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.send(formData);
    });
  } catch (error) {
    throw error;
  }
};