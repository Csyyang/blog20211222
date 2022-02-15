<script setup>
import { reactive, ref, watch, computed } from 'vue'
import { getComment, setComment } from "api/comment"
import { useStore } from 'vuex'

/**
 * 定义props
 */
const props = defineProps({
    data: {
        type: Object,
        default: () => { }
    },
    showComment: {
        type: Boolean,
        default: false
    }

})

/**
 * 获取账号
 */
const store = useStore()
const account = computed(() => {
    return store.state.user.userData.account
})

const parentComment = reactive({})

/**
 * 获取评论列表
 */
const input = ref('')
watch(props, (value) => {
    if (value.showComment) {
        getParentsComment()
    }
})

async function getParentsComment() {
    const res = await getComment({
        id: props.data.id,
        level: '1'
    })
    Object.assign(parentComment, res.data)
}

/**
 * 发表评论
 */
const submit = async () => {
    const res = await setComment({
        account: account.value,
        comment_context: input.value,
        article_id: props.data.id,
        parent_comment_id: 0,
        comment_level: '1',
        replay_account: props.data.account
    })

    if (res.code === '00') {
        getParentsComment()
    }
}

/**
 * 获取头像
 */

// getAvatar = async (account) => {
//     const res = await getUserImage(account)
//     if (res.code === '00') {
//         return
//     }
// }
</script>
      
<template >
    <div v-if="props.showComment">
        <t-input class="commment-input" v-model="input" placeholder="请输入,按回车提交" @enter="submit" />
        <t-comment
            v-for="item in parentComment"
            :avatar="`http://yangyangcsy.cn/test/user/getUserImg?account=${item.account}`"
            :author="item.account"
            :datetime="item.comment_date"
            :content="item.comment_context"
        >
            <template #actions>
                <span key="thumbUp">
                    <t-icon name="thumb-up" />
                    <span class="action-text">{{ item.praise_num }}</span>
                </span>
                <span key="chat">
                    <t-icon name="chat" />
                    <span class="action-text">回复</span>
                </span>
            </template>

            <!-- <template #reply>
                        <t-comment
                            avatar="https://tdesign.gtimg.com/site/avatar.jpg"
                            datetime="今天16:38"
                            content="这里是评论者写的评论内容。"
                        >
                            <template #author>
                                <span>评论作者名B</span>
                                <t-icon name="caret-right-small" size="small" class="author-icon" />
                                <span>评论作者名A</span>
                            </template>

                            <template #actions>
                                <span key="thumbUp">
                                    <t-icon name="thumb-up" />
                                    <span class="action-text">6</span>
                                </span>
                                <span key="chat">
                                    <t-icon name="chat" />
                                    <span class="action-text">回复</span>
                                </span>
                            </template>
                        </t-comment>
            </template>-->
        </t-comment>
    </div>
</template>

<style lang="scss">
.commment-input {
    margin-bottom: 12px;
}

.t-comment {
    padding: 12px;
}
</style>