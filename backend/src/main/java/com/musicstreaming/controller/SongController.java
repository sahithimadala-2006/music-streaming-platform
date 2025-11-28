package com.musicstreaming.controller;

import com.musicstreaming.model.Song;
import com.musicstreaming.repository.SongRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/songs")
public class SongController {

    private final SongRepository songRepo;

    public SongController(SongRepository songRepo) {
        this.songRepo = songRepo;

    }

    @GetMapping
    public List<Song> getAllSongs() {
        return songRepo.findAll();
    }

    @PostMapping
    public Song addSong(@RequestBody Song song) {
        return songRepo.save(song);
    }

}