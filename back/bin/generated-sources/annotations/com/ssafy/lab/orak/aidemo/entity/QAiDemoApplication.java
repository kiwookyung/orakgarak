package com.ssafy.lab.orak.aidemo.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAiDemoApplication is a Querydsl query type for AiDemoApplication
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAiDemoApplication extends EntityPathBase<AiDemoApplication> {

    private static final long serialVersionUID = -1336387452L;

    public static final QAiDemoApplication aiDemoApplication = new QAiDemoApplication("aiDemoApplication");

    public final com.ssafy.lab.orak.common.entity.QBaseEntity _super = new com.ssafy.lab.orak.common.entity.QBaseEntity(this);

    public final StringPath adminNote = createString("adminNote");

    //inherited
    public final DateTimePath<java.time.LocalDateTime> createdAt = _super.createdAt;

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final DateTimePath<java.time.LocalDateTime> processedAt = createDateTime("processedAt", java.time.LocalDateTime.class);

    public final ListPath<Long, NumberPath<Long>> recordIds = this.<Long, NumberPath<Long>>createList("recordIds", Long.class, NumberPath.class, PathInits.DIRECT2);

    public final EnumPath<com.ssafy.lab.orak.aidemo.enums.ApplicationStatus> status = createEnum("status", com.ssafy.lab.orak.aidemo.enums.ApplicationStatus.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> updatedAt = _super.updatedAt;

    public final NumberPath<Long> userId = createNumber("userId", Long.class);

    public final ListPath<String, StringPath> youtubeLinks = this.<String, StringPath>createList("youtubeLinks", String.class, StringPath.class, PathInits.DIRECT2);

    public QAiDemoApplication(String variable) {
        super(AiDemoApplication.class, forVariable(variable));
    }

    public QAiDemoApplication(Path<? extends AiDemoApplication> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAiDemoApplication(PathMetadata metadata) {
        super(AiDemoApplication.class, metadata);
    }

}

