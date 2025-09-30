package com.ssafy.lab.orak.dislike.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDislike is a Querydsl query type for Dislike
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDislike extends EntityPathBase<Dislike> {

    private static final long serialVersionUID = -2057470788L;

    public static final QDislike dislike = new QDislike("dislike");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final NumberPath<Long> songId = createNumber("songId", Long.class);

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public QDislike(String variable) {
        super(Dislike.class, forVariable(variable));
    }

    public QDislike(Path<? extends Dislike> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDislike(PathMetadata metadata) {
        super(Dislike.class, metadata);
    }

}

