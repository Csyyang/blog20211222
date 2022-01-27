import { ref } from 'vue'

export default function useUpload(form) {
    const imageUrl = ref('')
    const handleAvatarSuccess = (res, file) => {
        imageUrl.value = URL.createObjectURL(file.raw)
        form.image = res.url
    }
    const beforeAvatarUpload = (file) => {
        const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
        const isLt2M = file.size / 1024 / 1024 < 10
    
        if (!isJPG) {
            ElMessage.error('Avatar picture must be JPG format!')
        }
        if (!isLt2M) {
            ElMessage.error('Avatar picture size can not exceed 10MB!')
        }
        return isJPG && isLt2M
    }

    return {
        imageUrl,
        handleAvatarSuccess,
        beforeAvatarUpload
    }
}