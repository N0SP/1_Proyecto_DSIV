package ejemplo.demo.Models;

public class Comment {
    private int commentId;
    private String description;
    private int userId;
    private int noticiaId;

    public Comment(int commentId, String description, int userId, int noticiaId) {
        this.commentId = commentId;
        this.description = description;
        this.userId = userId;
        this.noticiaId = noticiaId;
    }

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getNoticiaId() {
        return noticiaId;
    }

    public void setNoticiaId(int noticiaId) {
        this.noticiaId = noticiaId;
    }
}
